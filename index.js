//document.querySelector("button").addEventListener("click",handleClick) //no ()
//function handleClick(){
//    alert("yea");
//}

//using ananomous functions


let n = document.querySelectorAll(".drum").length;
//console.log(n);
for (let i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // let audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });

}

document.addEventListener("keypress", function(event) {
    // console.log(event);
    playSound(event.key);
    animation(event.key);
});

function playSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            console.log("some error");

            break;
    }
    audio.play();
}

function animation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}