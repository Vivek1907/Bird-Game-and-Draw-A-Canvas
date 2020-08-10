class StormZone{
    constructor(){
        this.locality = '';
        this.danger = false;
        this.select = createSelect();
        this.subSelect = createSelect();
    }
    hide(){
        this.select.hide();
        this.subSelect.hide();
     }

    show(){
        this.select.show();
        this.subSelect.show();
     }

    display(){
        stroke(0,0,255);
        strokeWeight(3);
        noFill();
        rect(10,displayHeight/2+40,displayWidth-30,displayHeight/4);
        fill(0,0,255);
        textSize(30);
        text("ARE YOU SAFE FROM CYCLONES/HURRICANES/TYPHOONS?",displayWidth/2-500,displayHeight/2+80);
        this.select.position(displayWidth/2-330,displayHeight/2+135);
        this.subSelect.position(displayWidth/2-330,displayHeight/2+185);

        this.select.changed(()=>{
           this.subSelect.remove();
           this.subSelect = createSelect();
           getCycloneDistricts();
        });
    
         this.subSelect.changed(()=>{
          this.locality = this.subSelect.value();
          isVeryHighlyProneToCyclones = false;
          isHighlyProneToCyclones = false;
          isModeratelyProneToCyclones - false;
          isLessProneToCyclones = false;
        });
    }

    optionList(){
      this.select.selected('Choose A State/UT');
      this.select.option('Choose A State/UT');
      this.select.option('Andhra Pradesh');
      this.select.option('Arunachal Pradesh');
      this.select.option('Assam');
      this.select.option('Bihar');
      this.select.option('Chhattisgarh');
      this.select.option('Goa');
      this.select.option('Gujurat');
      this.select.option('Haryana');
      this.select.option('Himachal Pradesh');
      this.select.option('Jharkhand');
      this.select.option('Karnataka');
      this.select.option('Kerala');
      this.select.option('Madhya Pradesh');
      this.select.option('Maharashtra');
      this.select.option('Meghalaya');
      this.select.option('Mizoram');
      this.select.option('Nagaland');
      this.select.option('Odisha');
      this.select.option('Punjab');
      this.select.option('Rajasthan');
      this.select.option('Sikkim');
      this.select.option('Tamil Nadu');
      this.select.option('Telengana');
      this.select.option('Tripura');
      this.select.option('Uttar Pradesh');
      this.select.option('Uttarakhand');
      this.select.option('West Bengal');
      this.select.option('Andaman and Nicobar');
      this.select.option('Chandigarh');
      this.select.option('Dadra and Nagar Haveli');
      this.select.option('Daman and Diu');
      this.select.option('Delhi');
      this.select.option('Jammu and Kashmir');
      this.select.option('Ladakh');
      this.select.option('Lakshadweep');
      this.select.option('Pondicherry');
}
}