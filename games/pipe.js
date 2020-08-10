class Pipe {
    constructor() {
        this.w = 100;
        this.x = width;
        this.gap = random(100,110);
        this.h = random(height / 8, (7/8) * height - this.gap);
        this.top = [];
    }

    display() {
        fill('#6d1717');
        rect(this.x, 0, this.w, this.h);
        rect(this.x, this.h + this.gap, this.w, height-(this.h+this.gap));
        if(!bird.dead){
         this.x-=5;
        }
    }

    checkDistance(){
        if((bird.x+bird.r/2>this.x) && (bird.x-bird.r/2 < this.x+this.w) && (bird.y-bird.r/2 < this.h || bird.y+ bird.r/2 > this.h + this.gap)){
           bird.dead = true;
        }
        if(bird.x-bird.r/2 > this.x+this.w+1 && bird.x-bird.r/2 < this.x+this.w+5){
            score+=1;
          }
    }
}