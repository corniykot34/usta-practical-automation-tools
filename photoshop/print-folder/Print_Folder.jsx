#target photoshop

app.displayDialogs = DialogModes.NO;

var doc = app.activeDocument;

var folder = Folder.selectDialog("Choose folder with images");

if (!folder) {
    throw new Error("Cancelled");
}

var files = folder.getFiles(function(f) {
    return (f instanceof File) &&
        /\.(jpg|jpeg|png|tif|tiff|psd|bmp)$/i.test(f.name);
});

if (files.length === 0) {
    alert("No supported images found in the selected folder.");
    throw new Error("No images");
}

files.sort(function(a, b) {
    var aa = a.name.toLowerCase();
    var bb = b.name.toLowerCase();

    if (aa < bb) return -1;
    if (aa > bb) return 1;
    return 0;
});

for (var i = 0; i < files.length; i++) {
    placeFile(files[i]);

    try {
        doc.printOneCopy();
    }
    catch (e) {
        alert(
            "Print error:\n" +
            decodeURI(files[i].name) +
            "\n\n" +
            e.message
        );
        throw e;
    }

    $.sleep(300);
    doc.activeLayer.remove();
}

alert(
    "Done.\nFiles sent to print: " +
    files.length
);

function placeFile(file) {
    var d = new ActionDescriptor();

    d.putPath(
        charIDToTypeID("null"),
        file
    );

    d.putEnumerated(
        charIDToTypeID("FTcs"),
        charIDToTypeID("QCSt"),
        charIDToTypeID("Qcsa")
    );

    var offset = new ActionDescriptor();

    offset.putUnitDouble(
        charIDToTypeID("Hrzn"),
        charIDToTypeID("#Pxl"),
        0
    );

    offset.putUnitDouble(
        charIDToTypeID("Vrtc"),
        charIDToTypeID("#Pxl"),
        0
    );

    d.putObject(
        charIDToTypeID("Ofst"),
        charIDToTypeID("Ofst"),
        offset
    );

    executeAction(
        charIDToTypeID("Plc "),
        d,
        DialogModes.NO
    );
}
