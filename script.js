var sec = 0;
var min = 0;
var hrs = 0;
var interval;

var display = document.querySelector('.time');
var play = document.querySelector('.play');
var repeat = document.querySelector('.repeating');
var stop = document.querySelector('.stop');

play.addEventListener('click', function() {
    clearInterval(interval);
    interval = setInterval(incTime, 1000);
});

repeat.addEventListener('click', function() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hrs = 0;
    display.innerHTML = `00 : 00 : 00`;
});

stop.addEventListener('click', function() {
    clearInterval(interval);
});

function incTime() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hrs++;
        }
    }
    let h=hrs<10?"0"+hrs:hrs;
    let m=min<10?"0"+min:min;
    let s=sec<10?"0"+sec:sec;
    display.innerHTML = `${h} : ${m} : ${s}`;
}