# Place Rotate Layout 142×202

Places every supported image from a selected folder into the active Photoshop document, resizes each placed Smart Object to exactly **142 × 202 mm**, rotates it **90°**, and alternates between two fixed positions.

## Layout

After rotation, each image occupies 202 × 142 mm on the sheet.

Position order:

1. Top — X 4 mm, Y 4 mm
2. Bottom — X 4 mm, Y 148 mm

The vertical spacing between the two positions is 2 mm. After the second image, the cycle starts again from the top position, so image 3 overlaps image 1, image 4 overlaps image 2, and so on.

## Requirements

- Adobe Photoshop with ExtendScript / JSX support
- Tested target environment: Photoshop CS6
- An open target document

## Usage

1. Open the target Photoshop document.
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

Experimental / needs field test.
