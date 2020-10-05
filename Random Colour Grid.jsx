generateColourGridDocument(30, 30);

function generateColourGridDocument(rows, columns) {

var randomColour = new RGBColor();
var document = app.documents.add();
document.name = "Random Colour Grid ("+rows+"x"+columns+")";
document.documentColorSpace = DocumentColorSpace.RGB;

var width = document.width / columns;
var height = document.height / rows;

var layer, rectangle;
var counter = 0;
var thisX = 0;
var thisY = 0;

for(var x = 1; x <= columns; x++) {
    for(var y = 1; y <= rows; y++) {
        counter++;
        layer = document.layers.add();
        layer.name = counter;
        rectangle = layer.pathItems.rectangle(document.height, 0, width, height);
        randomColour.red = Math.floor(Math.random() * 255);
        randomColour.green = Math.floor(Math.random() * 255);
        randomColour.blue = Math.floor(Math.random() * 255);
        rectangle.fillColor = randomColour;
        rectangle.filled = true;
        rectangle.translate(thisX, thisY);
        thisY-=height;    
        }
    thisY=0;
    thisX+=width;
    }

}