# Place Layout 102×142

Places every supported image from a selected folder into the active Photoshop document, automatically corrects sideways source orientation when needed, resizes each placed Smart Object to exactly **102 × 142 mm**, and cycles through four fixed positions on an A4 sheet.

## Intended workflow

Before running the script:

- Create or open an **A4 document (210 × 297 mm)** in Photoshop for a standard desktop printer.
- Prepare source artwork in the intended print proportion before placement. Typical source proportions are **2:3** or standard **ISO A-series** proportions such as A3, A4, A5, A6, and related sizes.
- Use source files that are already composed correctly. This script handles orientation normalization, placement, and physical sizing; it does not crop or intelligently recompose images.

## Automatic orientation check

The script inspects each placed Smart Object before resizing.

- If the placed source is already portrait-oriented, it is left unchanged.
- If the placed source is wider than it is tall, it is treated as a sideways source and rotated 90° before the final physical size is applied.

This check happens before resizing so source orientation can still be detected reliably.

## Layout

Each image is exactly **102 × 142 mm**.

Position order:

1. Top-left — X 2.5 mm, Y 4 mm
2. Top-right — X 105.5 mm, Y 4 mm
3. Bottom-left — X 2.5 mm, Y 148 mm
4. Bottom-right — X 105.5 mm, Y 148 mm

Horizontal layout:

`2.5 mm margin + 102 mm image + 1 mm gap + 102 mm image + 2.5 mm margin = 210 mm`

Vertical spacing between rows is 2 mm.

After the fourth image, the cycle starts again from the top-left position, so image 5 overlaps image 1, image 6 overlaps image 2, and so on. This is intentional and useful when several print sets are prepared as stacked layers in one document.

## Requirements

- Adobe Photoshop with ExtendScript / JSX support
- Tested environment: Photoshop CS6
- Active A4 document, 210 × 297 mm

## Usage

1. Open the A4 target Photoshop document.
2. Run `Place_Layout_102x142.jsx`.
3. Select the folder containing the images.
4. The script places, checks orientation, rotates sideways files when needed, resizes, names, and positions every supported image automatically.

Supported formats: JPG, JPEG, PNG, TIFF, PSD, BMP.

## Notes

- Images are placed as Smart Objects.
- Layer names are taken from the source filenames without extensions.
- Width and height are forced independently to exactly 102 × 142 mm after orientation normalization. Images with an unsuitable aspect ratio will still be stretched.
- Physical dimensions are calculated from the resolution of the active Photoshop document.
- The 2.5 mm outer side margins and 1 mm center gap were chosen after real print-layout testing so the two 102 mm-wide images fit cleanly within the 210 mm A4 width without reducing the artwork size.

## Status

**A4 layout tested on Photoshop CS6. Automatic orientation correction added and ready for field test.**
