# Place Rotate Layout 142×202

Places every supported image from a selected folder into the active Photoshop document, resizes each placed Smart Object to exactly **142 × 202 mm**, rotates it **90°**, and alternates between two fixed positions.

## Intended workflow

Before running the script:

- Create or open an **A4 document (210 × 297 mm)** in Photoshop for a standard desktop printer.
- Prepare source artwork in the intended print proportion before placement. Typical source proportions are **2:3** or standard **ISO A-series** proportions such as A3, A4, A5, A6, and related sizes.
- Use source files that are already composed correctly. This script handles placement, rotation, and physical sizing; it does not crop or intelligently recompose images.

## Layout

After rotation, each image occupies 202 × 142 mm on the sheet.

Position order:

1. Top — X 4 mm, Y 4 mm
2. Bottom — X 4 mm, Y 148 mm

The vertical spacing between the two positions is 2 mm. After the second image, the cycle starts again from the top position, so image 3 overlaps image 1, image 4 overlaps image 2, and so on.

## Requirements

- Adobe Photoshop with ExtendScript / JSX support
- Tested environment: Photoshop CS6
- Active A4 document, 210 × 297 mm

## Usage

1. Open the A4 target Photoshop document.
2. Run `Place_Rotate_Layout_142x202.jsx`.
3. Select the folder containing the images.
4. The script places, resizes, rotates, names, and positions every supported image automatically.

Supported formats: JPG, JPEG, PNG, TIFF, PSD, BMP.

## Notes

- Images are placed as Smart Objects.
- Layer names are taken from the source filenames without extensions.
- Width and height are forced independently to exactly 142 × 202 mm before rotation. Images with a different aspect ratio will be stretched.
- Physical dimensions are calculated from the resolution of the active Photoshop document.

## Status

Tested on Photoshop CS6.
