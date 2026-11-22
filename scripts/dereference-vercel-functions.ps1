# Replace Vercel build-output symlinks with real copies before a prebuilt deploy.
# Windows prebuilt deploys otherwise fail with ENOENT on .vercel/output/functions/*.func.

$ErrorActionPreference = 'Stop'

$root = Join-Path (Get-Location) '.vercel\output\functions'
if (-not (Test-Path -LiteralPath $root)) {
  throw "Build output not found: $root. Run 'vercel build --prod' first."
}

$links = @(Get-ChildItem -LiteralPath $root -Recurse -Force | Where-Object { $_.LinkType -eq 'SymbolicLink' })
$done = 0

foreach ($link in ($links | Sort-Object { $_.FullName.Length } -Descending)) {
  $raw = [string]($link.Target | Select-Object -First 1)
  $parent = Split-Path -Parent $link.FullName
  $targetFull = if ([System.IO.Path]::IsPathRooted($raw)) {
    $raw
  } else {
    [System.IO.Path]::GetFullPath((Join-Path -Path $parent -ChildPath $raw))
  }
  $targetItem = Get-Item -LiteralPath $targetFull -Force

  if ($link.PSIsContainer) {
    [System.IO.Directory]::Delete($link.FullName)
  } else {
    [System.IO.File]::Delete($link.FullName)
  }

  if ($targetItem.PSIsContainer) {
    Copy-Item -LiteralPath $targetFull -Destination $link.FullName -Recurse -Force
  } else {
    Copy-Item -LiteralPath $targetFull -Destination $link.FullName -Force
  }
  $done++
}

$remaining = @(Get-ChildItem -LiteralPath $root -Recurse -Force | Where-Object { $_.LinkType -eq 'SymbolicLink' }).Count
Write-Output "Dereferenced=$done Remaining=$remaining"

if ($remaining -gt 0) {
  throw "$remaining symbolic links remain in the build output."
}
