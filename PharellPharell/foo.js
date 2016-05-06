var main = function(){
  var x = document.getElementById("test_text");
  var old = x.innerHTML;
  var nouveau = "";
  for(var i=0; i<old.length; i++){
     nouveau[i]=old[old.length-i-1];
  }
  x = nouveau;      
};
window.onload=function()
            {
              setTimeout(main, 1750);
            };
           