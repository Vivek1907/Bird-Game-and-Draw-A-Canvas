class Cform{
    constructor(){
        this.input = createInput();
        this.input.addClass('publishb');
    }
    hide(){
        this.input.hide();
    }
    display1(){
        stroke(0,0,255);
        strokeWeight(1);
        fill(255,0,0);
        textSize(40);
        text("Geo Update",displayWidth/2-10,50);
        fill(0);
        textSize(20);
        text("Name: ",displayWidth/2-70,displayHeight/3-35);
        //this.input.style('border','30px');
        this.input.style('border','5px solid #22ccb5');
        this.input.style('border-radius','5px');
        this.start.position(displayWidth/2,displayHeight/3);
        this.input.size(200,20);
    }
}