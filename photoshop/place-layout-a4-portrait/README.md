# Place Layout A4 Portrait

Places every supported image from a selected folder into the active Photoshop document as a Smart Object, automatically corrects sideways source orientation when needed, resizes each image to exactly **210 × 297 mm**, and aligns it to the top-left corner of the A4 canvas.

## Intended workflow

Before running the script:

- Create or open an **A4 portrait document (210 × 297 mm)** in Photoshop for a standard desktop printer.
- Prepare source artwork in the intended print proportion before placement. Typical source proportions are **2:3** or standard **ISO A-series** proportions such as A3, A4, A5, A6, and related sizes.
- Use source files that are already composed correctly. This script handles orientation normalization, placement, and physical sizing; it does not crop or intelligently recompose images.

## Automatic orientation check

The script inspects each placed Smart Object before resizing.

- If the placed source is already portrait-oriented, it is left unchanged.
- If the placed source is wider than it is tall, it is treated as a sideways source and rotated 90° before the final physical size is applied.

This check happens before resizing so source orientation can still be detected reliably.

## Layout

Each image is resized to exactly **210 × 297 mm** and positioned at:

- X = 0 mm
- Y = 0 mm

All imported images use the same position, so multiple files become stacked layers in the active A4 document.

## Requirements

- Adobe Photoshop with ExtendScript / JSX support
- Tested environment: Photoshop CS6
- Active A4 portrait document, 210 × 297 mm

## Usage

1. Open the A4 portrait target document.
2. Run `Place_Layout_A4_Portrait.jsx`.
3. Select the folder containing the images.
4. The script places, checks orientation, rotates sideways files when needed, resizes, names, and aligns every supported image automatically.

Supported formats: JPG, JPEG, PNG, TIFF, PSD, BMP.

## Notes

- Images are placed as Smart Objects.
- Layer names are taken from the source filenames without extensions.
- Width and height are forced independently to exactly 210 × 297 mm after orientation normalization. Images with an unsuitable aspect ratio will be stretched.
- Physical dimensions are calculated from the resolution of the active Photoshop document.

## Status

**Tested on Photoshop CS6, including automatic orientation correction.**
