# Place Layout 102×142

Places every supported image from a selected folder into the active Photoshop document, resizes each placed Smart Object to exactly **102 × 142 mm**, and cycles through four fixed positions.

## Intended workflow

Before running the script:

- Create or open an **A4 document (210 × 297 mm)** in Photoshop for a standard desktop printer.
- Prepare source artwork in the intended print proportion before placement. Typical source proportions are **2:3** or standard **ISO A-series** proportions such as A3, A4, A5, A6, and related sizes.
- Use source files that are already composed correctly. This script handles placement and physical sizing; it does not crop or intelligently recompose images.

## Layout

Position order:

1. Top-left — X 4 mm, Y 4 mm
2. Top-right — X 108 mm, Y 4 mm
3. Bottom-left — X 4 mm, Y 148 mm
4. Bottom-right — X 108 mm, Y 148 mm

The spacing between neighboring images is 2 mm. After the fourth image, the cycle starts again from the top-left position, so image 5 overlaps image 1, image 6 overlaps image 2, and so on.

## Requirements

- Adobe Photoshop with ExtendScript / JSX support
- Tested environment: Photoshop CS6
- Active A4 document, 210 × 297 mm

## Usage

1. Open the A4 target Photoshop document.
2. Run `Place_Layout_102x142.jsx`.
3. Select the folder containing the images.
4. The script places, resizes, names, and positions every supported image automatically.

Supported formats: JPG, JPEG, PNG, TIFF, PSD, BMP.

## Notes

- Images are placed as Smart Objects.
- Layer names are taken from the source filenames without extensions.
- Width and height are forced independently to exactly 102 × 142 mm. Images with a different aspect ratio will be stretched.
- Physical dimensions are calculated from the resolution of the active Photoshop document.

## Known issue

This 2 × 2 layout has been field-tested and is **not recommended as-is** for A4 output. With the current 4 mm left margin, 2 mm center gap, and two 102 mm-wide images, the layout reaches the full 210 mm sheet width and can protrude beyond the A4 canvas/printable area in real use.

A corrected version needs slightly smaller artwork and/or revised horizontal spacing before this layout should be treated as production-ready.

## Status

Tested on Photoshop CS6 — known A4 edge overflow issue.
