#target photoshop

app.displayDialogs = DialogModes.NO;

var doc = app.activeDocument;
var printLayers = [];

for (var i = 0; i < doc.layers.length; i++) {
    var layer = doc.layers[i];

    if (layer.typename == "ArtLayer") {
        try {
            if (!layer.isBackgroundLayer) {
                printLayers.push(layer);
            }
        } catch (e) {
            printLayers.push(layer);
        }
    }
}

if (printLayers.length === 0) {
    alert("No printable top-level layers found.");
    throw new Error("No printable layers");
}

var originalVisibility = [];
for (var j = 0; j < printLayers.length; j++) {
    originalVisibility[j] = printLayers[j].visible;
}

for (var k = 0; k < printLayers.length; k++) {
    printLayers[k].visible = false;
}

for (var n = 0; n < printLayers.length; n++) {
    printLayers[n].visible = true;

    try {
        doc.printOneCopy();
    } catch (e) {
        alert(
            "Print error on layer:\n" +
            printLayers[n].name +
            "\n\n" +
            e.message
        );
        throw e;
    }

    $.sleep(300);
    printLayers[n].visible = false;
}

for (var m = 0; m < printLayers.length; m++) {
    printLayers[m].visible = originalVisibility[m];
}

alert("Done. Printed layers: " + printLayers.length);
