# Photoshop — Print Folder

Print every supported image in a selected folder from the current Photoshop document using the document's current print settings.

## Workflow

1. Open the Photoshop document/template you want to print from.
2. Make one manual test print and set the correct printer, paper, color-management, scaling, orientation, and driver settings.
3. Run `Print_Folder.jsx`.
4. Choose the folder containing the images.
5. The script places each image, prints one copy, removes that placed layer, and continues with the next file.

## Supported source files

- JPG / JPEG
- PNG
- TIFF
- PSD
- BMP

## Important

- The script does **not** rasterize the placed image.
- It relies on the **current Photoshop print settings**. Always make a manual test print first.
- It does not modify or overwrite the source image files.
- Files are processed in alphabetical filename order.
- Tested in Adobe Photoshop CS6 Extended 13.0.1 (32-bit) on Windows.

## Install in Photoshop CS6

Copy `Print_Folder.jsx` to Photoshop's scripts folder, typically:

`C:\Program Files (x86)\Adobe\Adobe Photoshop CS6\Presets\Scripts\`

Restart Photoshop. The script will then appear under:

`File → Scripts → Print_Folder`

You can also assign a keyboard shortcut via:

`Edit → Keyboard Shortcuts → Application Menus → File → Scripts`

## Status

Field-tested on a real multi-image print batch.
