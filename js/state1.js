class State1 {
    constructor() {
        this.instructions = createA('instructions/instructions.html','Instructions');
        this.canvas = createA('canvas.html','Play the Canvas Game');
        this.start = createButton('Play Help the Bird');
    }

    hide() {
        this.instructions.hide();
        this.start.hide();
        this.canvas.hide();
    }

    show() {
        this.instructions.show(); 
        this.start.show();
        this.canvas.show();
    }

    display() {
        image(book, displayWidth / 2 - 20, 100, 80, 80);
        textSize(35);
        fill(0, 255, 0);
        strokeWeight(20);
        textStyle(BOLD);
        text("GAME ZONE", displayWidth / 2 - 30, 70);
        noFill();
        strokeWeight(3);
        stroke(0, 255, 0);
        rect(10, 10, displayWidth - 30, displayHeight / 4);
        this.instructions.position(displayWidth / 2 - 70, 200);
        this.instructions.addClass('instructions');
        this.canvas.addClass('canvasLink');
        this.start.addClass('start');
        fill(255);

        this.start.mousePressed(() => {
            state.update(2);
        });
    }
}