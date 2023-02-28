var x = Math.floor((Math.random() * 6) + 1);
var diceImg1 = "dice" + x + ".png";
var diceSource1 = "images/" + diceImg1;
var img1 = document.querySelectorAll("img")[0];
document.querySelectorAll("img")[1].setAttribute("src", diceSource1);
img1.setAttribute("src", diceSource1);

var y = Math.floor((Math.random() * 6) + 1);
var diceImg2 = "dice" + y + ".png";
var diceSource2 = "images/" +diceImg2;
document.querySelectorAll("img")[1].setAttribute("src", diceSource2);

function refreshPage() 
{
   location.reload();
}

if(x > y)
{
   document.querySelector("h1").innerHTML="🎲Player 1 wins !";
}

else if(x < y)
{  
   document.querySelector("h1").innerHTML="Player 2 wins !🎲";
}

else
{
   document.querySelector("h1").innerHTML="-Draww-";
}