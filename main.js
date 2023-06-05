time = document.getElementById('time');

var start = 1;
let id = setInterval(sec, 1000);

//проверка музыки 
var musicPlay = false;

function sec() {
    if(musicPlay) {
        time.style.color = "rgba(240, 248, 255, 0.767)";

        var mins = Math.floor(start/60);
        var seconds = start%60;
    
        checkTime(mins, seconds);
    }
    
}

function checkTime(mins, seconds) {

    if(start <= 120) {
        time.innerText = seconds < 10 ?`${mins}:0${seconds}` : `${mins}:${seconds}`;
        start++;
    }
    else {
        timeIsOver();
        clearInterval(id);

        time.innerText = "NICE!"
        time.style.color = "rgba(141, 87, 117, 0.767)";
        
        time.style.transition = "10s";
        time.style.fontSize = "400px";
        time.style.marginLeft = "250px";
        time.style.marginTop = "100px";
        

        document.getElementById('text').innerText = ":)"
    }
}

function timeIsOver() {
    time.style.color = "rgba(141, 87, 117, 0.767)";
}


document.getElementById('content').onmousemove = resetTime;

function resetTime() {
    if (start <= 120) {
        timeIsOver();

        time.innerText = "0:00"
        start = 0;
    }
    
}


let audio = document.getElementById('music');
audio.volume = 0.17;

audio.onplay = function() {
    audio.style.visibility = "hidden";
    document.getElementById('prewiew').style.visibility = "hidden";
    musicPlay = true;
}
