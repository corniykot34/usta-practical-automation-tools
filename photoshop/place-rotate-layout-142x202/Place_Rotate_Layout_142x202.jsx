#target photoshop

app.displayDialogs = DialogModes.NO;

if (app.documents.length === 0) {
    alert("Open the target document first.");
    throw new Error("No active document");
}

var doc = app.activeDocument;
var folder = Folder.selectDialog("Choose folder with images");

if (!folder) {
    throw new Error("Cancelled");
}

var files = folder.getFiles(function (f) {
    return (f instanceof File) &&
        /\.(jpg|jpeg|png|tif|tiff|psd|bmp)$/i.test(f.name);
});

if (files.length === 0) {
    alert("No supported images found in the selected folder.");
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
var imageWidthMM = 142;
var imageHeightMM = 202;

var positions = [
    { x: 4, y: 4 },
    { x: 4, y: 148 }
];

try {
    for (var i = 0; i < files.length; i++) {
        placeFile(files[i]);

        var layer = doc.activeLayer;
        layer.name = decodeURI(files[i].name).replace(/\.[^\.]+$/, "");

        resizeLayerMM(layer, imageWidthMM, imageHeightMM);
        layer.rotate(90, AnchorPosition.MIDDLECENTER);

        var position = positions[i % 2];
        moveLayerToMM(layer, position.x, position.y);
    }
}
finally {
    app.preferences.rulerUnits = oldUnits;
}

alert(
    "Done.\n" +
    "Images placed: " + files.length + "\n" +
    "Source size: 142 x 202 mm\n" +
    "Rotation: 90 degrees\n" +
    "Layout cycle: top, bottom"
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

function resizeLayerMM(layer, widthMM, heightMM) {
    var targetWidthPX = (widthMM / 25.4) * resolution;
    var targetHeightPX = (heightMM / 25.4) * resolution;

    var bounds = layer.bounds;
    var currentWidth = bounds[2].as("px") - bounds[0].as("px");
    var currentHeight = bounds[3].as("px") - bounds[1].as("px");

    var scaleX = (targetWidthPX / currentWidth) * 100;
    var scaleY = (targetHeightPX / currentHeight) * 100;

    layer.resize(scaleX, scaleY, AnchorPosition.MIDDLECENTER);
}

function moveLayerToMM(layer, xMM, yMM) {
    var targetXPX = (xMM / 25.4) * resolution;
    var targetYPX = (yMM / 25.4) * resolution;

    var bounds = layer.bounds;
    var currentX = bounds[0].as("px");
    var currentY = bounds[1].as("px");

    layer.translate(targetXPX - currentX, targetYPX - currentY);
}
