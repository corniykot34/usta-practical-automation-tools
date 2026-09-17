# Place Rotate Layout 142×202

Places every supported image from a selected folder into the active Photoshop document, automatically corrects sideways source orientation when needed, resizes each placed Smart Object to exactly **142 × 202 mm**, rotates it **90°** for the A4 layout, and alternates between two fixed positions.

## Intended workflow

Before running the script:

- Create or open an **A4 document (210 × 297 mm)** in Photoshop for a standard desktop printer.
- Prepare source artwork in the intended print proportion before placement. Typical source proportions are **2:3** or standard **ISO A-series** proportions such as A3, A4, A5, A6, and related sizes.
- Use source files that are already composed correctly. This script handles orientation normalization, placement, rotation, and physical sizing; it does not crop or intelligently recompose images.

## Automatic orientation check

The script inspects each placed Smart Object before resizing.

- If the placed source is already portrait-oriented, it is left unchanged.
- If the placed source is wider than it is tall, it is treated as a sideways source and rotated 90° before the final physical size is applied.

After orientation normalization and resizing to 142 × 202 mm, the script applies the separate 90° layout rotation required to fit two images vertically on an A4 sheet.

This check happens before resizing so source orientation can still be detected reliably.

## Layout

After the final layout rotation, each image occupies **202 × 142 mm** on the sheet.

Position order:

1. Top — X 4 mm, Y 4 mm
2. Bottom — X 4 mm, Y 148 mm

The vertical spacing between the two positions is 2 mm.

After the second image, the cycle starts again from the top position, so image 3 overlaps image 1, image 4 overlaps image 2, and so on. This is intentional and useful when several print sets are prepared as stacked layers in one document.

## Requirements

- Adobe Photoshop with ExtendScript / JSX support
- Tested environment: Photoshop CS6
- Active A4 document, 210 × 297 mm

## Usage

1. Open the A4 target Photoshop document.
2. Run `Place_Rotate_Layout_142x202.jsx`.
3. Select the folder containing the images.
4. The script places, checks orientation, normalizes sideways files when needed, resizes, applies the final layout rotation, names, and positions every supported image automatically.

Supported formats: JPG, JPEG, PNG, TIFF, PSD, BMP.

## Notes

- Images are placed as Smart Objects.
- Layer names are taken from the source filenames without extensions.
- Width and height are forced independently to exactly 142 × 202 mm after orientation normalization. Images with an unsuitable aspect ratio will still be stretched.
- Physical dimensions are calculated from the resolution of the active Photoshop document.
- Source orientation correction and layout rotation are separate steps: the first fixes a sideways source file, while the second is always applied to produce the intended A4 top/bottom arrangement.

## Status

**Tested on Photoshop CS6, including automatic orientation correction and final layout rotation.**
