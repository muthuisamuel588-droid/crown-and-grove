"""Rebrand user-facing site copy from Syntra Agency to Crown & Grove."""

from pathlib import Path

ROOT = Path(r"C:\Users\psamir\Documents\syntra-website")

FILES = []
for folder in ("app", "components", "lib"):
    FILES += list((ROOT / folder).rglob("*.tsx"))
    FILES += list((ROOT / folder).rglob("*.ts"))
FILES.append(ROOT / "README.md")

REPLACEMENTS = [
    ("Syntra Agency", "Crown & Grove"),
    ("Syntra's", "Crown & Grove's"),
    ("SYNTRA AGENCY", "CROWN & GROVE"),
    ("Syntra", "Crown & Grove"),
    ("SYNTRA", "CROWN & GROVE"),
    ("/syntra-logo.png", "/crown-grove-logo-dark.png"),
    ("/syntra-glow.png", "/crown-grove-mark-dark.png"),
]

total = 0
for path in FILES:
    text = path.read_text(encoding="utf-8")
    new = text
    for old, replacement in REPLACEMENTS:
        new = new.replace(old, replacement)
    if new != text:
        changed = sum(text.count(old) for old, _ in REPLACEMENTS)
        total += changed
        path.write_text(new, encoding="utf-8")
        print(f"{changed:3d}  {path.relative_to(ROOT)}")

print(f"Total replacements: {total}")
