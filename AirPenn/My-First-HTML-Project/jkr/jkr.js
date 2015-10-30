window.onload=function()
{

//pre 1-----------------------------------------

document.getElementById("js1").innerHTML="JOKER:  A random joke will appear....";

//pre vars--------------------------------------

var amount="3";

//pre 2-----------------------------------------

document.getElementById("js3").innerHTML="Number of Jokes:  " + amount;


//-------------------------------------------------------------------------------------------------------------

//func vars-------------------------------------

var temp="1";
var num=Math.floor(Math.random()*10);

  //func vars->jokes----------------------------
  
  var joke1="If con is the opposite of pro what's the opposite of progress?";
  var joke2="I haven't reported my missing credit card to the police because whoever stole it is spending less than my wife.";
  var joke3="America.";
  var joke4="A blonde walks into a bar....";

    //func vars->jokes->answers-----------------
    
    var ans1="Congress.";
    var ans2="I haven't reported my missing credit card to the police because whoever stole it is spending less than my wife.";
    var ans3="America.";
    var ans4="A blonde walks into a bar....";

//function--------------------------------------

function joke()
{

  if(num===0||num===1)
  {
    document.getElementById("js3").innerHTML=joke1;
    setTimeout(function(){document.getElementById("js3").innerHTML=ans1;}, 5000);
  }
  else if(num===2||num===3)
  {
    document.getElementById("js3").innerHTML=joke2;
    setTimeout(function(){document.getElementById("js3").innerHTML=ans2;}, 5000);
  }
  else if(num===4||num===5)
  {
    document.getElementById("js3").innerHTML=joke3;
    setTimeout(function(){document.getElementById("js3").innerHTML=ans3;}, 5000);
  }
  else if(num===6||num===7)
  {
    document.getElementById("js3").innerHTML=joke4;
    setTimeout(function(){document.getElementById("js3").innerHTML=ans4;}, 5000);
  }
}

setInterval(function(){joke();}, 10000);

//do not delete the below curly brace
};