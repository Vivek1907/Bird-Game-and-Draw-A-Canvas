class Bird {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.vx = 0;
        this.vy = 0;
        this.r = 40;
        this.speed = -6;
        this.gravity = 0.5;
        this.dead = false;
        this.image;
    }

    display() {
        if (this.y === height - 100 - this.r / 2) {
            this.dead = true;
        }

        if (this.dead == true) {
            push();
            imageMode(CENTER)
            image(dead, this.x, this.y, this.r, this.r + 10);
            pop();
        }

        else {
            var frames = characterdata.frames;
            var imageFrames = [];

            for (var i = 0; i < frames.length; i++) {
                imageFrames[i] = character.get(frames[i].x, frames[i].y, frames[i].width, frames[i].height);
            }
            push();
            imageMode(CENTER);
            image(imageFrames[floor(frameCount / 4 % 3)], this.x, this.y, this.r, this.r - 10);
            pop();
        }
    }

    update() {
        if (!this.dead) {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += this.gravity;
            this.y = constrain(this.y, this.r / 2, height - 100 - this.r / 2);
        }
    }

    flap() {
        this.vy = this.speed;
    }
}