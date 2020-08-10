class Form{
    constructor(){
        this.start = createButton('Submit');
        this.input = createInput();
    }
    hide(){
        this.start.hide();
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
        this.input.position(displayWidth/2,displayHeight/3-50);
        this.input.size(200,20);

        this.start.mousePressed(()=>{

            if(this.input.value().length <= 0){
                this.validName();
            }
            
            else{
                state.update(1);
                player.name = this.input.value();
                player.index+=1;
            }
        });
        
        
    }

    validName(){
        fill(255,0,0)
        textSize(20);
        text("Enter a valid name!",displayWidth/2,displayHeight/3-60);
    }
}