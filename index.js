var arr = document.querySelectorAll("button");


var audioArr = ["sounds/crash.mp3", "sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"]

var colors = [];
while (colors.length < 100) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}

document.addEventListener("keypress", function(e){
    var aud = findPos(e.key);
    var obj = document.querySelector("."+e.key);
    obj.style.color = colors[getMeRand()];

    var myAudio = new Audio(aud);
    myAudio.play();
})

function getMeRand() {
    return Math.floor(Math.random() * 100);
}

for(var i = 0; i < arr.length; i ++) {
    arr[i].addEventListener('click', function() {
        var x = findPos(this.textContent);
        var aud = new Audio(x);
        this.style.color = colors[getMeRand()];
        addAnimate(this.textContent);
        aud.play();
    });
}   

function findPos(char) {
    if(char == "w") {
        return audioArr[0];
    }
    if(char == "a") {
        return audioArr[1];
    }
    if(char == 's') {
        return audioArr[2];
    }
    if(char == 'd') {
        return audioArr[3];
    }
    if(char == 'j') {
        return audioArr[4];
    }
    if(char == 'k') {
        return audioArr[5];
    }
    if(char == 'l') {
        return audioArr[6];
    }
}

    function addAnimate(currKey) {
        var cls = ("."+currKey);
        var but = document.querySelector(cls);
        but.classList.add("pressed");
        setTimeout(() => {
            but.classList.remove("pressed");
        },100);
    }
