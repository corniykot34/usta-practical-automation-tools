# Photoshop — Print All Layers

Print the top-level non-background layers of the current Photoshop document one by one, using the document's current print settings.

## Workflow

1. Prepare the Photoshop document yourself: layer content, size, position, and color correction.
2. Make one manual test print and confirm all print settings.
3. Run `Print_All_Layers.jsx`.
4. The script hides all printable layers, then shows and prints them one at a time.
5. When finished, it restores the original visibility state of the layers.

## Important

- No naming convention is required.
- The script ignores the Background layer.
- It currently processes only top-level `ArtLayer` layers, not layers nested inside groups.
- Layers are printed in the order returned by Photoshop's top-level layer stack.
- It uses `printOneCopy()`, so always make a manual test print first.
- Tested target: Adobe Photoshop CS6 Extended 13.0.1 (32-bit) on Windows.

## Install in Photoshop CS6

Copy `Print_All_Layers.jsx` to Photoshop's scripts folder, typically:

`C:\Program Files (x86)\Adobe\Adobe Photoshop CS6\Presets\Scripts\`

Restart Photoshop. The script will then appear under:

`File → Scripts → Print_All_Layers`

You can assign a keyboard shortcut via:

`Edit → Keyboard Shortcuts → Application Menus → File → Scripts`

## Status

Field-tested on a real multi-image print batch.
