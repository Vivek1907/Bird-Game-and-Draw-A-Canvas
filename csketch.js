var canvas, canvasWidth, canvasHeight, canvasColor, canvasImageFile, canvasImage, downloadButton;
var path, drawing;
var isDrawing = true;
var isErase = false;
var number, colour, weight, shadeColor;
var radio;
var epath, edrawing;
var sdrawing;
var scontainer = [];
var isShape = false;
var database;
var player;
var refer;
var form;
var ct;
var img;
var copyPath;
var isFinish = false;
var transperancy;
var decimal = 100;
var tn;

function setup() {
    canvasWidth = select('.canvasWidth');
    canvasHeight = select('.canvasHeight');
    canvasColor = select('.colorpicker');
    canvasImageFile = createFileInput(handleFile);
    canvasImageFile.parent(select('.property'));
    transperancy = createSlider(0, 255, 255);
    createElement('p').html('Transperancy - Canvas').parent(select('.trans'));
    tn = createElement('p');
    tn.parent(select('.trans'));
    transperancy.parent(select('.trans'));
    canvasImageFile.position(150, 150);
    downloadButton = select('.myButton');
    downloadButton.mousePressed(() => {
        saveCanvas('canvas', 'png');
    });
    canvas = createCanvas(960, 540);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
    canvas.style('border', '1px solid black');
    drawing = [];
    path = [];
    edrawing = [];
    epath = [];
    sdrawing = [];
    var pencilPanel = createDiv();
    pencilPanel.addClass('myDiv');
    pencilPanel.style('padding', '20px');
    radio = createRadio();
    radio.option('Pencil', 'pen')
    radio.option('Eraser', 'erase');
    radio.option('Shape', 'shape');
    radio.parent(pencilPanel);
    var heading = createElement('h1');
    heading.html('Pencil Panel');
    heading.parent(pencilPanel);
    number = createInput('1', 'number');
    number.parent(pencilPanel);
    colour = createColorPicker('#000000');
    colour.parent(pencilPanel);
    var button = createButton('Publish');
    var clearBtn = createButton('Clear');
    clearBtn.addClass('clear');
    clearBtn.parent(pencilPanel);
    database = firebase.database();
    player = new Player();
    form = new Cform();
    refer = database.ref('/');
    refer.on('value', (data) => {
        var drawings = data.val();
        var keys = Object.keys(drawings);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var content;
            database.ref(key + '/drawing').on('value', (data) => {
                content = data.val();
                ct = content;
            })
            createElement('p').html('Go down to see the image after pressing the view button. Right click and save the image.').parent(select('.pencilPanel'))
            database.ref(key + '/name').on('value', (data) => {
                var li = createElement('li', data.val());
                li.addClass('listing');
                li.parent(select('.pencilPanel'));
                var view = createButton('View');
                view.parent(li);
                view.mousePressed(() => {
                    if (ct != undefined) {
                        img = createImg(ct);
                    }
                });
            })
        }
    });
    button.addClass('publish');
    button.mousePressed(() => {
        var elts = selectAll('.listing');
        for (var i = 0; i < elts.length; i++) {
            elts[i].remove();
        }
        var ref = database.ref('/');
        var object = {
            name: form.input.value(),
            drawing: canvas["canvas"].toDataURL('image/png')
        }
        ref.push(object);
    });
    clearBtn.mousePressed(clearCanvas);
}

function startPath() {
    if (radio.value() === 'pen') {
        isDrawing = true;
        path = [];
        drawing.push(path);
    }
    else if (radio.value() === 'erase') {
        isErase = true;
        epath = [];
        edrawing.push(epath);
    }

    else if (radio.value() === 'shape') {
        isShape = true;
    }
}

function endPath() {
    isDrawing = false;
    isErase = false;
    isShape = false;
}

function draw() {
    resizeCanvas(canvasWidth.value() / 2, canvasHeight.value() / 2);
    decimal = transperancy.value();
    tn.html(decimal);
    if (canvasImage) {
        background(canvasImage);
    }
    else {
        background(canvasColor.value() + convertDecimalToHexa(decimal));
    }

    weight = number.value();
    shadeColor = colour.color();

    if (radio.value() === 'pen') {
        copyPath = drawing[drawing.length - 1];
    }
    else if (radio.value() === 'erase') {
        copyPath = edrawing[edrawing.length - 1];
    }
    else if (radio.value() === 'shape') {
        copyPath = sdrawing[sdrawing.length - 1];
    }

    if (isDrawing) {
        var point = {
            x: mouseX,
            y: mouseY,
            weight: weight,
            color: shadeColor,
            isFill: false
        }
        path.push(point);
    }

    else if (isErase) {
        var point = {
            x: mouseX,
            y: mouseY,
            weight: weight
        }
        epath.push(point);
    }

    else if (isShape) {
        var point = {
            x: mouseX,
            y: mouseY,
            weight: weight,
            color: shadeColor,
        }
        sdrawing.push(point);
    }

    shapeDraw();
    pencil();
    erase();
}

function handleFile(file) {
    if (file.type === 'image') {
        canvasImage = loadImage(file.data);
    }
    else {
        canvasImage = null;
    }
}

function shapeDraw() {
    push();

    beginShape();
    noFill();

    for (var i = 0; i < sdrawing.length; i++) {
        stroke(sdrawing[i].color+convertDecimalToHexa(decimal2));
        strokeWeight(sdrawing[i].weight);
        var s = sdrawing[i];
        vertex(s.x, s.y);
    }
    endShape();
    pop();
}

function pencil() {
    push();
    for (var i = 0; i < drawing.length; i++) {
        var current = drawing[i];
        beginShape();
        for (var j = 0; j < current.length; j++) {
            if (current[j].isFill) {
                fill(current[j].color);
            }
            else {
                noFill();
            }
            strokeWeight(current[j].weight);
            stroke(current[j].color);
            vertex(current[j].x, current[j].y);
        }
        endShape();
    }
    pop();
}

function erase() {
    push();
    for (var i = 0; i < edrawing.length; i++) {
        var current = edrawing[i];
        noFill();
        beginShape();
        if (!canvasImage) {
            stroke(canvasColor.value());
        }
        else {
            stroke(255);
        }
        for (var j = 0; j < current.length; j++) {
            strokeWeight(current[j].weight);
            vertex(current[j].x, current[j].y);
        }
        endShape();
    }
    pop();
}

function clearCanvas() {
    drawing = [];
    edrawing = [];
    sdrawing = [];
}

function convertDecimalToHexa(number) {
    var hex = number;
    var remainder;
    while ((hex / 16) >= 1) {
        remainder = hex % 16;
        hex = hex / 16;
    }
    if (floor(hex) === 10) {
        hex = 'a';
    }
    else if (floor(hex) === 11) {
        hex = 'b';
    }
    else if (floor(hex) === 12) {
        hex = 'c';
    }
    else if (floor(hex) === 13) {
        hex = 'd';
    }
    else if (floor(hex) === 14) {
        hex = 'e';
    }
    else if (floor(hex) === 15) {
        hex = 'f';
    }

    if (remainder === 10) {
        remainder = 'a';
    }
    else if (remainder === 11) {
        remainder = 'b';
    }
    else if (remainder === 12) {
        remainder = 'c';
    }
    else if (remainder === 13) {
        remainder = 'd';
    }
    else if (remainder === 14) {
        remainder = 'e';
    }
    else if (remainder === 15) {
        remainder = 'f';
    }

    if (hex < 10) {
        if (remainder != undefined) {
            return '' + floor(hex) + '' + '' + remainder;
        }
        else {
            return '0' + hex;
        }
    }
    else {
        if (remainder != undefined) {
            return hex + '' + remainder;
        }
        else {
            return '0' + hex;
        }
    }
}