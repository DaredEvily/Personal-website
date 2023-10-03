
var buttonColors = ["red","green","yellow","blue"];
var clickbutton = ['w','a','s','d']

var gamePattern =[]
var userClickedPattern = []

var started = false
var biggan = false
var level = 0

// sequnces
function nextSequence(){
    userClickedPattern = []
    level++
    $(".title").text("level "+ level)

    var randomnumber = Math.round(Math.random() * 3);   
    var randomChosenColour = buttonColors[randomnumber];
    gamePattern.push(randomChosenColour);

    $("#"+ randomChosenColour).fadeOut(200).fadeIn(200);
    makesound(randomChosenColour);

}

// keyboard click 
$(document).keypress(function(event){
    var keyclick = event.key

    if (!started && !clickbutton.includes(keyclick)){
        nextSequence()
        started = true
    }
    else if(clickbutton.includes(keyclick) && started == true){
        switch(keyclick){
            case "w":makesound("green");animation("green");userClickedPattern.push("green");
            checkanswer(userClickedPattern.length-1);break;
            case "a":makesound("red");animation("red");userClickedPattern.push("red");
            checkanswer(userClickedPattern.length-1);break;
            case "s":makesound("yellow");animation("yellow");userClickedPattern.push("yellow");
            checkanswer(userClickedPattern.length-1);break;
            case "d":makesound("blue");animation("blue");userClickedPattern.push("blue");
            checkanswer(userClickedPattern.length-1);break;
        }
    }
});

// click
$("button").click(function(){
    var userChoseClour = this.id;
    userClickedPattern.push(userChoseClour);
    makesound(userChoseClour);
    animation(userChoseClour);
    checkanswer(userClickedPattern.length-1);
})


// ==================================================
function starting(start){
    level = 0
    gamePattern = []
    started = false


    $(document).click(function(){
        if (!start){
            started = true;
            nextSequence()
            start = true
        }
        else{
                return false
        }
    })
}
// ==================================================
function checkanswer(currentlevel){
    if(gamePattern[currentlevel] === userClickedPattern[currentlevel]){
        if(userClickedPattern.length === gamePattern.length){
            time(1000)
        }
    
    }
    else{
        makesound("wrong")
        $("body").addClass("over");
        setTimeout(function(){$(".title").text("Game Over")},100);
        setTimeout(function(){$(".title").text("Reload The Page To restart")},2000);
    }
}

// ==================================================
// makesound 
function makesound(color){
    function audio(path){var aa = new Audio(path);aa.play()};
    
    switch(color){
        case "red":audio("sounds/red.mp3");break
        case "green":audio("sounds/green.mp3");break;
        case "yellow":audio("sounds/yellow.mp3");break;
        case "blue":audio("sounds/blue.mp3");break;
        case "wrong":audio("sounds/wrong.mp3");break;
    }
}
// animation
function animation(color){
    $("#" + color).addClass("pressed");setTimeout(function(){$("#"+color).removeClass("pressed")},100);
}

//time
function time(Time){
    setTimeout(function(){nextSequence()},Time)
}

// ==========================================
//                 Starting
// ==========================================
                starting(biggan)