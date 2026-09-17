# Place Layout 102×142

Places every supported image from a selected folder into the active Photoshop document, resizes each placed Smart Object to exactly **102 × 142 mm**, and cycles through four fixed positions.

## Layout

Position order:

1. Top-left — X 4 mm, Y 4 mm
2. Top-right — X 108 mm, Y 4 mm
3. Bottom-left — X 4 mm, Y 148 mm
4. Bottom-right — X 108 mm, Y 148 mm

The spacing between neighboring images is 2 mm. After the fourth image, the cycle starts again from the top-left position, so image 5 overlaps image 1, image 6 overlaps image 2, and so on.

## Requirements

- Adobe Photoshop with ExtendScript / JSX support
- Tested target environment: Photoshop CS6
- An open target document

## Usage

1. Open the target Photoshop document.
2. Run `Place_Layout_102x142.jsx`.
3. Select the folder containing the images.
4. The script places, resizes, names, and positions every supported image automatically.

Supported formats: JPG, JPEG, PNG, TIFF, PSD, BMP.

## Notes

- Images are placed as Smart Objects.
- Layer names are taken from the source filenames without extensions.
- Width and height are forced independently to exactly 102 × 142 mm. Images with a different aspect ratio will be stretched.
- Physical dimensions are calculated from the resolution of the active Photoshop document.

## Status

Experimental / needs field test.
