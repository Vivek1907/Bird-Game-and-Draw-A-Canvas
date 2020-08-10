class VolcanoZone{
    constructor(){
        this.locality = '';
        this.danger = false;
        this.input = createInput('');
        this.button = createButton('See Status');
    }
    hide(){
        this.input.hide();
        this.button.hide();
     }

     show(){
      this.input.show();
      this.button.show();
   }

    display(){
        stroke(255,0,0);
        strokeWeight(3);
        noFill();
        rect(10,displayHeight/4+20,displayWidth-30,displayHeight/4);
        fill(255,0,0);
        textSize(30);
        text("ARE YOU SAFE FROM VOLCANOES?",displayWidth/2-500,displayHeight/3);
        textSize(22);
        fill(0);
        noStroke();
        text("Country",displayWidth/2-450,displayHeight/3+45);
        this.input.position(displayWidth/2-330,displayHeight/3+30);
        this.button.position(displayWidth/2-330,displayHeight/3+80);
        this.button.mousePressed(()=>{
            this.locality = this.input.value();
        });
    }
    checkLocality(){
      fill(255);
      textSize(25);
      textStyle(BOLD);
      
     if(this.danger){
        image(danger,displayWidth/2+400,displayHeight/3-50,50,50)
     }

     if(this.locality.toUpperCase() == 'ITALY'){
         textSize(20);
         text(countries.Italy,displayWidth/4-300,displayHeight/3+140);
         image(eruption4,displayWidth/2+400,displayHeight/3-50,300,210);
         this.danger = true;
      }

     else if(this.locality.toUpperCase() == 'TANZANIA'){
        textSize(20);
        text(countries.Tanzania,displayWidth/4-300,displayHeight/3+140);
        image(eruption3,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = false;
     }

     else if(this.locality.toUpperCase() == 'INDONESIA'){
        textSize(20);
        text(countries.Indonesia,displayWidth/4-300,displayHeight/3+140);
        image(eruption4,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = true;
     }

     else if(this.locality.toUpperCase() == 'AMERICA'||this.locality.toUpperCase() == 'UNITED STATES'|| this.locality.toUpperCase() == 'USA'|| this.locality.toUpperCase() == 'UNITED STATESS OF AMERICA'){
        textSize(15);
        text(countries.America,displayWidth/4-300,displayHeight/3+140);
        image(eruption4,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = true;
     }

     else if(this.locality.toUpperCase() == 'CANADA'){
        textSize(15);
        text(countries.Canada,displayWidth/4-300,displayHeight/3+140);
        image(eruption2,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = false;
     }

     else if(this.locality.toUpperCase() == 'MEXICO'||this.locality.toUpperCase() == 'EL SALVADOR'||this.locality.toUpperCase() == 'COSTA RICA'||this.locality.toUpperCase() == 'BELIZE'||this.locality.toUpperCase() == 'GAUTEMALA'||this.locality.toUpperCase() == 'HONDURAS'||this.locality.toUpperCase() == 'COSTA RICA'||this.locality.toUpperCase() == 'NICARAGUA'||this.locality.toUpperCase() == 'PANAMA'){
        textSize(20);
        text(countries.Mexico,displayWidth/4-300,displayHeight/3+140);
        image(eruption4,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = true;
     }

     else if(this.locality.toUpperCase() == 'INDIA'){
        textSize(15);
        text(countries.India,displayWidth/4-370,displayHeight/3+140);
        image(no,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = false;
     }

     else if(this.locality.toUpperCase() == 'ICELAND'){
        textSize(20);
        text(countries.Iceland,displayWidth/4-300,displayHeight/3+140);
        image(eruption0 ,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = false;
     }

     else if(this.locality.toUpperCase() == 'AUSTRALIA'){
        textSize(15);
        text(countries.Australia,displayWidth/4-300,displayHeight/3+140);
        image(eruption2 ,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = false;
     }

     else if(this.locality.toUpperCase() == 'VANATU'||this.locality.toUpperCase() == 'ECUADOR'||this.locality.toUpperCase() == 'NEW ZEALAND'||this.locality.toUpperCase() == 'SOLOMON ISLANDS'||this.locality.toUpperCase() == 'PAPUA NEW GUINEA'||this.locality.toUpperCase() == 'PERU'||this.locality.toUpperCase() == 'COLOMBIA'||this.locality.toUpperCase() == 'ETHIOPIA'||this.locality.toUpperCase() == 'DRCONGO'||this.locality.toUpperCase() =='DEMOCRATIC REPUBLIC OF THE CONGO'||this.locality.toUpperCase() =='DRC'||this.locality.toUpperCase()== 'DR CONGO'){
        textSize(20);
        text(countries.anonymous,displayWidth/4-300,displayHeight/3+140);
        image(eruption3 ,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = true;
     }

     else if(this.locality.toUpperCase() == 'ANTARCTICA'){
        textSize(20);
        text(countries.Antarctica,displayWidth/4-300,displayHeight/3+140);
        image(eruption2 ,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = false;
     }

     else if(this.locality.toUpperCase() == 'RUSSIA'){
        textSize(17);
        text(countries.RussiaOne,displayWidth/4-370,displayHeight/3+120);
        text(countries.RussiaTwo,displayWidth/4-370,displayHeight/3+150);
        image(eruption4 ,displayWidth/2+500,displayHeight/3-50,300,210);
        this.danger = true;
     }

     else if(this.locality.toUpperCase() == 'UK'||this.locality.toUpperCase() == 'UNITED KINGDOM'){
        textSize(20);
        text('Michael is a restless volcano located in an island of UK',displayWidth/4-300,displayHeight/3+140);
        image(eruption2 ,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = false;
     }

     else if(this.locality.toUpperCase() == 'CHILE'||this.locality.toUpperCase() == 'ARGENTINA'){
        textSize(15);
        text(countries.Chile,displayWidth/4-300,displayHeight/3+140);
        image(eruption3 ,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = true;
     }

     else if(this.locality.toUpperCase() == 'JAPAN'){
        textSize(15);
        text(countries.Japan,displayWidth/4-300,displayHeight/3+140);
        image(eruption4 ,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = true;
     }

     else if(this.locality.toUpperCase() == 'PHILIPPINES'){
        textSize(15);
        text(countries.Philppines,displayWidth/4-300,displayHeight/3+140);
        image(eruption4 ,displayWidth/2+400,displayHeight/3-50,300,210);
        this.danger = true;
     }

     else{
      text('This Country does not have any any active volcano',displayWidth/4-300,displayHeight/3+140);
      image(smiley, displayWidth/2+400,displayHeight/3,170,130);
      this.danger = false;
    }
}
}