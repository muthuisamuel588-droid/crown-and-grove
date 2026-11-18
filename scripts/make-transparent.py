"""Convert the flat Syntra logo's near-black background to true alpha transparency.

The source artwork is bright cyan/white on a near-black field. Because the
colours were composited over black, we recover the original colour by
un-premultiplying against the derived alpha.
"""

from pathlib import Path
from PIL import Image

SRC = Path(r"C:\Users\psamir\Downloads\1000969305.png")
DST = Path(r"C:\Users\psamir\Documents\my projects\syntra-website\public\syntra-logo.png")
FLOOR = 8  # background pixels top out around RGB 7

src = Image.open(SRC).convert("RGB")
out = Image.new("RGBA", src.size)
sp = src.load()
op = out.load()

for y in range(src.height):
    for x in range(src.width):
        r, g, b = sp[x, y]
        # Max channel keeps saturated cyan at full opacity instead of dulling it.
        a = max(r, g, b)
        if a <= FLOOR:
            op[x, y] = (0, 0, 0, 0)
            continue
        a = int((a - FLOOR) * 255 / (255 - FLOOR))
        scale = 255 / a
        op[x, y] = (
            min(255, int(r * scale)),
            min(255, int(g * scale)),
            min(255, int(b * scale)),
            a,
        )

out.save(DST, "PNG", optimize=True)
print(f"Saved {DST} ({DST.stat().st_size} bytes), alpha range {out.getchannel('A').getextrema()}")
