for(var i = 0 ; i < document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",mouseclick);

        function mouseclick(){
            var mousclick = this.innerHTML;
            playsound(mousclick);
        }
    };

addEventListener("keypress",keyboardclick);

function keyboardclick(pres){
    var keyboard = pres.key;
    playsound(keyboard);
};

function playsound(keypressed){
    buttonanimation(keypressed);
    function audio(path){var aa = new Audio(path);aa.play()};

    switch(keypressed){
        case "w":audio("sounds/tom-1.mp3");break;
        case "a":audio("sounds/tom-2.mp3");break;
        case "s":audio("sounds/tom-3.mp3");break;
        case "d":audio("sounds/tom-4.mp3");break;
        case "j":audio("sounds/snare.mp3");break;
        case "k":audio("sounds/crash.mp3");break;
        case "l":audio("sounds/kick-bass.mp3");break;
    };

};

function buttonanimation(currentkey){
    var activebutton = document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){activebutton.classList.remove("pressed")},100);
}
