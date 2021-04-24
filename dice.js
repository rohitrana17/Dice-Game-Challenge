

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


 var randomnumber2 = Math.floor(Math.random() *6) +1;
 var randomsource2 = "images/dice" + randomnumber2 + ".png";
 document.querySelectorAll("img")[1].setAttribute("src" , randomsource2 );


 if(randomNumber1 > randomnumber2){
 	document.querySelector("h1").innerHTML = "  ⛳ player 1 gets Bamboozled ";

 }
    
 else if (randomnumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "player 2 get Bamboozled ⛳";
}
else{
	
	document.querySelector("h1").innerHTML = "Draw!";
}

