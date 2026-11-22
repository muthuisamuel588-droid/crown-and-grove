"""Convert the supplied Crown & Grove lockups into transparent, dark-theme assets."""

from pathlib import Path
from PIL import Image

PUBLIC = Path(r"C:\Users\psamir\Documents\syntra-website\public")
APP = Path(r"C:\Users\psamir\Documents\syntra-website\app")

CREAM = (247, 244, 236)
GOLD = (212, 175, 55)


def convert(src: Path, dst: Path):
    im = Image.open(src).convert("RGBA")
    out = []
    for r, g, b, a in im.getdata():
        # White / cream page background -> transparent
        if r > 235 and g > 230 and b > 215:
            out.append((r, g, b, 0))
        # Dark ink letterforms -> cream so they read on charcoal
        elif r < 120 and g < 120 and b < 120:
            out.append((*CREAM, a))
        # Everything else (gold, antialiasing) stays as-is
        else:
            out.append((r, g, b, a))
    im.putdata(out)
    im.save(dst)
    print(f"{dst.name}: {im.size}")


convert(PUBLIC / "crown-grove-logo.png", PUBLIC / "crown-grove-logo-dark.png")
convert(APP / "icon.png", APP / "icon.png")
convert(APP / "apple-icon.png", APP / "apple-icon.png")
