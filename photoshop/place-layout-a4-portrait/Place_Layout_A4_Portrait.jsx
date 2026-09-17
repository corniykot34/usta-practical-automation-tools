#target photoshop

app.displayDialogs = DialogModes.NO;

if (app.documents.length === 0) {
    alert("Open an A4 portrait document first.");
    throw new Error("No active document");
}

var doc = app.activeDocument;
var folder = Folder.selectDialog("Select a folder with images");

if (!folder) {
    throw new Error("Cancelled");
}

var files = folder.getFiles(function (f) {
    return (f instanceof File) &&
        /\.(jpg|jpeg|png|tif|tiff|psd|bmp)$/i.test(f.name);
});

if (files.length === 0) {
    alert("No supported image files were found in the selected folder.");
    throw new Error("No images");
}

files.sort(function (a, b) {
    var aa = a.name.toLowerCase();
    var bb = b.name.toLowerCase();

    if (aa < bb) return -1;
    if (aa > bb) return 1;
    return 0;
});

var oldUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;

var resolution = doc.resolution;
var imageWmm = 210;
var imageHmm = 297;
var targetXmm = 0;
var targetYmm = 0;

try {
    for (var i = 0; i < files.length; i++) {
        placeFile(files[i]);

        var layer = doc.activeLayer;
        layer.name = decodeURI(files[i].name).replace(/\.[^\.]+$/, "");

        ensurePortraitOrientation(layer);
        resizeLayerMM(layer, imageWmm, imageHmm);
        moveLayerToMM(layer, targetXmm, targetYmm);
    }
}
finally {
    app.preferences.rulerUnits = oldUnits;
}

alert(
    "Done.\n" +
    "Placed images: " + files.length + "\n" +
    "Image size: 210 × 297 mm\n" +
    "Layout: full A4 portrait"
);

function placeFile(file) {
    var d = new ActionDescriptor();

    d.putPath(charIDToTypeID("null"), file);
    d.putEnumerated(
        charIDToTypeID("FTcs"),
        charIDToTypeID("QCSt"),
        charIDToTypeID("Qcsa")
    );

    var offset = new ActionDescriptor();
    offset.putUnitDouble(charIDToTypeID("Hrzn"), charIDToTypeID("#Pxl"), 0);
    offset.putUnitDouble(charIDToTypeID("Vrtc"), charIDToTypeID("#Pxl"), 0);

    d.putObject(charIDToTypeID("Ofst"), charIDToTypeID("Ofst"), offset);
    executeAction(charIDToTypeID("Plc "), d, DialogModes.NO);
}

function ensurePortraitOrientation(layer) {
    var b = layer.bounds;
    var currentW = b[2].as("px") - b[0].as("px");
    var currentH = b[3].as("px") - b[1].as("px");

    if (currentW > currentH) {
        layer.rotate(90, AnchorPosition.MIDDLECENTER);
    }
}

function resizeLayerMM(layer, widthMM, heightMM) {
    var widthPX = (widthMM / 25.4) * resolution;
    var heightPX = (heightMM / 25.4) * resolution;

    var b = layer.bounds;
    var currentW = b[2].as("px") - b[0].as("px");
    var currentH = b[3].as("px") - b[1].as("px");

    var scaleX = (widthPX / currentW) * 100;
    var scaleY = (heightPX / currentH) * 100;

    layer.resize(scaleX, scaleY, AnchorPosition.MIDDLECENTER);
}

function moveLayerToMM(layer, xMM, yMM) {
    var xPX = (xMM / 25.4) * resolution;
    var yPX = (yMM / 25.4) * resolution;

    var b = layer.bounds;
    var currentX = b[0].as("px");
    var currentY = b[1].as("px");

    layer.translate(xPX - currentX, yPX - currentY);
}
