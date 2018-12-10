$(document).ready(function(){
  var sharpCardSheets="grandstaffflash-page-00";
  var flatCardSheets="grandflatstaff-page-00";
  var naturalCardSheets="grandnaturalStaff-page-00";
  var sharpnoteCard=[];
  var sharphelperCard=[];
  var flatnoteCard=[];
  var flathelperCard=[];
  var naturalnoteCard=[];
  var naturalhelperCard=[];
  var fullCardSet=[];
  var cropPositions=[];
  var xPos='0';
  var yPos='100';
  var helperxPos=4*33.3;
  var helperyPos='0';
  $("#image").css('background-position',xPos+'%'+ yPos+'%');

var setCropPositions=function(){for (i = 0; i < 8; i++) {
    if (i <4)
    {
      xPos=i*33.3
      yPos=i+i*.2;
      helperxPos=33.3*(3-i)
      helperyPos=0;
    }
    else
    {
        xPos=(i%4)*33.3;
        yPos=103+(i%4)*.25;
        helperxPos=33.3*(3-i%4)
        helperyPos=100;
      }
      var positions=[xPos,yPos,helperxPos,helperyPos];
      cropPositions.push(positions);

    }
    console.log(cropPositions);}



    var buttonClick=function(){
    $("button").click(function(){
      //$.each(notes, function (index, value) {
        console.log(sharpnoteCard);
        console.log(sharpnoteCard.length);
        console.log(sharphelperCard);
        console.log(flatnoteCard);
        console.log(flatnoteCard.length);
        console.log(naturalnoteCard.length);
        console.log(sharpnoteCard.length)
        runThroughCards(flatnoteCard);

  });}

  var runThroughCards=function(cardSet)
  {k=0;
    console.log(cardSet.length);
          setInterval(function(){
            console.log(cardSet.length);
            if(k<cardSet.length)
            {console.log(k +"yo");
              var xPos=cardSet[k][0];
        var   yPos=cardSet[k][1];
          var whichPic=cardSet[k][2];
          $("#image").css("background","url("+whichPic+") 0px 0px");
    $("#image").css("background-size","400% 200%");
          $("#image").css('background-position',xPos+'%'+ yPos+'%');
          k+=1;

  }
  else{
    clearInterval();
  }}, 1000);}

  var cropSharps=function(type){

    for (i=0;i<8;i++)
    {
      console.log(i);
      var i=i+1;
      t=i+1;
        for (j=0;j<cropPositions.length-1;j++)
        {
            if (type=="sharp")
            {
          sharpnoteCard.push([cropPositions[j][0],cropPositions[j][1],sharpCardSheets+i+'.jpg',cropPositions[j][2],cropPositions[j][3],sharpCardSheets+t+'.jpg']);
          }
          else if (type=="flat") {
            flatnoteCard.push([cropPositions[j][0],cropPositions[j][1],flatCardSheets+i+'.jpg',cropPositions[j][2],cropPositions[j][3],flatCardSheets+t+'.jpg']);
          }
          else if (type=="natural")
          {
            naturalnoteCard.push([cropPositions[j][0],cropPositions[j][1],naturalCardSheets+i+'.jpg',cropPositions[j][2],cropPositions[j][3],naturalCardSheets+t+'.jpg']);
          }
          console.log("yoman");
          }

      }
    }






    setCropPositions();
    cropSharps("sharp");
    cropSharps("flat");
    cropSharps("natural");
  buttonClick();
   // jQuery methods go here...

});
