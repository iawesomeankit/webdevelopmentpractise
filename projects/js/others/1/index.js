console.log("alarm app");
let alarmSubmit = document.getElementById("alarmSubmit");
alarmSubmit.addEventListener('click', setAlarm);
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

function ringBell() {
    audio.play();
}

function setAlarm(e) {
    e.preventDefault();
    console.log("Alarm setted");
    const alarm = document.getElementById("alarm");
    alarmdate = new Date(alarm.value);
    now = new Date();
    let timeLeft = alarmdate - now;
    console.log(timeLeft);
    if (timeLeft >= 0) {
        setTimeout(() => {
            console.log("alarm ringing");
            ringBell();
        }, timeLeft);
    }
}