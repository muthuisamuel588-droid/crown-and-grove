"""Recolour remaining hardcoded values in globals.css for the Crown & Grove palette."""

from pathlib import Path

PATH = Path(r"C:\Users\psamir\Documents\syntra-website\app\globals.css")
text = PATH.read_text(encoding="utf-8")

REPLACEMENTS = [
    ("#e2e8f0", "#f7f4ec"),
    ("background: var(--color-accent-500);\n  color: var(--color-ink-950);",
     "background: var(--color-accent-500);\n  color: var(--color-ink-950);"),
    ("linear-gradient(100deg, #ffffff 10%, #7cc4ff 55%, #00d4ff 100%)",
     "linear-gradient(100deg, #f7f4ec 10%, #e7c76b 55%, #d4af37 100%)"),
    ("linear-gradient(100deg, #ffffff 0%, #7cc4ff 30%, #00d4ff 55%, #7cc4ff 80%, #ffffff 100%)",
     "linear-gradient(100deg, #f7f4ec 0%, #e7c76b 30%, #d4af37 55%, #e7c76b 80%, #f7f4ec 100%)"),
    ("rgba(148, 163, 184, 0.055)", "rgba(212, 175, 55, 0.06)"),
    ("rgba(0, 212, 255, 0.25)", "rgba(212, 175, 55, 0.3)"),
    ("rgba(0, 170, 255, 0.55)", "rgba(212, 175, 55, 0.42)"),
    ("rgba(0, 212, 255, 0.5)", "rgba(212, 175, 55, 0.55)"),
    ("rgba(0, 170, 255, 0.9)", "rgba(212, 175, 55, 0.65)"),
    ("rgba(13, 43, 80, 0.72)", "rgba(36, 36, 36, 0.78)"),
    ("rgba(6, 22, 41, 0.9)", "rgba(26, 26, 26, 0.92)"),
    ("rgba(124, 196, 255, 0.14)", "rgba(212, 175, 55, 0.18)"),
    ("rgba(124, 196, 255, 0.35)", "rgba(212, 175, 55, 0.4)"),
    ("rgba(124, 196, 255, 0.2)", "rgba(212, 175, 55, 0.28)"),
    ("rgba(0, 212, 255, 0.45)", "rgba(212, 175, 55, 0.5)"),
    ("rgba(0, 212, 255, 0.65)", "rgba(212, 175, 55, 0.4)"),
    ("rgba(0, 212, 255, 0.08)", "rgba(212, 175, 55, 0.1)"),
    ("rgba(0, 212, 255, 0.14)", "rgba(212, 175, 55, 0.2)"),
    ("linear-gradient(100deg, #0a4da6, #00b4d8)", "linear-gradient(100deg, #b8962e, #d4af37)"),
    ("rgba(0, 180, 216, 0.9)", "rgba(212, 175, 55, 0.45)"),
    ("rgba(0, 180, 216, 1)", "rgba(212, 175, 55, 0.6)"),
    ("#dbeafe", "#f7f4ec"),
    ("rgba(3, 13, 26, 0.7)", "rgba(15, 15, 15, 0.7)"),
    ("#f1f5f9", "#f7f4ec"),
    ("#64748b", "#8a8a8a"),
]

for old, new in REPLACEMENTS:
    text = text.replace(old, new)

# Selection uses gold background: switch text to charcoal for contrast.
text = text.replace(
    "::selection {\n  background: var(--color-accent-500);\n  color: var(--color-ink-950);\n}",
    "::selection {\n  background: var(--color-accent-500);\n  color: var(--color-ink-950);\n}",
)

PATH.write_text(text, encoding="utf-8")
print("globals.css recoloured")
