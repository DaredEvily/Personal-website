// random image 1
var radnomdice1 = Math.floor(Math.random()* 6) + 1 ;
var randomimg1 = "assets/"+radnomdice1+".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimg1);

// random image 2
var radnomdice2 = Math.floor(Math.random()* 6) + 1;
var randomimg2 = "assets/"+radnomdice2+".png";
console.log(randomimg2);
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimg2);

var h1 = document.querySelector("h1");
var p1 = document.querySelector(".dice1 p");
var p2 = document.querySelector(".dice2 p");

var wincolor = "#F0CAA3"

if (radnomdice1 > radnomdice2){
    h1.textContent = "Player 1 Win🚩";
    p1.style.color = wincolor;
}

else if(radnomdice1 == radnomdice2){
    h1.textContent = "Draw🤷‍♂️";
    h1.style.color = wincolor;
}

else{
    h1.textContent = "🚩Player 2 Win";
    p2.style.color = wincolor;
}

