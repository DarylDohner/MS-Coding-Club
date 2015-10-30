window.onload=function()
{

//general variables
var w=1;

var kill=function()
{
  while(w===1)
  {
    document.getElementById("js11").innerHTML="CRASH";
     
  }
  
  close();
}

//round 1

document.getElementById("js1").innerHTML="ROUND 1:";

var round1=prompt("Round 1? type 'yes'");

if(round1==="yes")
{
var r1=Math.floor(Math.random()*10);

if(r1>5)
{
  for(i=0;i<20;i++)
  {
    document.getElementById("js2").innerHTML="CRASH";
  }

  while(w===1)
  {
    document.getElementById("js2").innerHTML="CRASH!";
     
  }
}

else
{
  document.getElementById("js2").innerHTML="You survived!";
}
}
//round 2

document.getElementById("js3").innerHTML="ROUND 2:";

var r2=Math.floor(Math.random()*10);

var round2=prompt("Round 2?");

if (round2==="yes")
{
if(r2>5)
{
  for(i=0;i<20;i++)
  {
    document.getElementById("js4").innerHTML="CRASH";
  }

  while(w===1)
  {
    document.getElementById("js4").innerHTML="CRASH!";
  }
}

else
{
  document.getElementById("js4").innerHTML="You survived!";
}
}
//round 3

document.getElementById("js5").innerHTML="ROUND 3:";

var r3=Math.floor(Math.random()*10);

var round3=prompt("Round 3?");
if (round3==="yes")
{
if(r3>5)
{
  for(i=0;i<20;i++)
  {
    document.getElementById("js6").innerHTML="CRASH";
  }

  while(w===1)
  {
    document.getElementById("js6").innerHTML="CRASH!";
  }
}

else
{
  document.getElementById("js6").innerHTML="You survived!";
}
}
//round 4

document.getElementById("js7").innerHTML="ROUND 4:";

var r4=Math.floor(Math.random()*10);

var round4=prompt("Round 4?");

if(round4==="yes")
{
if(r4>5)
{
  for(i=0;i<20;i++)
  {
    document.getElementById("js8").innerHTML="CRASH";
  }

  while(w===1)
  {
    document.getElementById("js8").innerHTML="CRASH!";
  }
}

else
{
  document.getElementById("js8").innerHTML="You survived!";
}
}
//round 5

document.getElementById("js9").innerHTML="ROUND 5:";

var r5=Math.floor(Math.random()*10);

var round5=prompt("Round 5?  LAST ROUND!")

if (round5==="yes")
{
if(r5>5)
{
  for(i=0;i<20;i++)
  {
    document.getElementById("js10").innerHTML="CRASH";
  }

  while(w===1)
  {
    document.getElementById("js10").innerHTML="CRASH!";
  }
}

else
{
  document.getElementById("js10").innerHTML="You survived!  But browser will crash in 2 seconds....";
  /*setTimeout(function(){kill()}, 2000)*/
}
}

//do not delete the below curly brace
}