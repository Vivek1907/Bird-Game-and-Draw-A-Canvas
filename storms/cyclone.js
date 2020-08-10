function checkLocalityForCyclones(){

    checkCycloneDistricts();

 if(isVeryHighlyProneToCyclones){
    fill(255);
    textSize(25);
    textStyle(BOLD);
    text(stormZone.locality+cycloneStatus.one,displayWidth/2+50,displayHeight/2+250);
    }
 else if(isHighlyProneToCyclones){
      fill(255);
      textSize(25);
      textStyle(BOLD);
      text(stormZone.locality+cycloneStatus.two,displayWidth/2+50,displayHeight/2+250);
  }
  else if(isModeratelyProneToCyclones){
      fill(255);
      textSize(25);
      textStyle(BOLD);
      text(stormZone.locality+cycloneStatus.three,displayWidth/2+50,displayHeight/2+250);
  }

  else if(isLessProneToCyclones){
      fill(255);
      textSize(25);
      textStyle(BOLD);
      text(stormZone.locality+cycloneStatus.four,displayWidth/2+50,displayHeight/2+250);
  }

  else if(stormZone.locality == 'Choose A District'){
    fill(255,0,0);
    textSize(25);
    textStyle(BOLD);
    text("Choose A District!.",displayWidth/2+50,displayHeight/2+250);
  }

  else{
      fill(255);
      textSize(25);
      textStyle(BOLD);
      text('This place'+cycloneStatus.five,displayWidth/2+50,displayHeight/2+250);
  }

  }