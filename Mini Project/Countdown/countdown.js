const daysId = document.getElementById('days');
const hoursId = document.getElementById('hours');
const minsId = document.getElementById('mins');
const secondsId = document.getElementById('seconds');
const daytime = "17 Oct 2023";

// let daytime = '';

// function selectDate(){  
//     daytime = document.getElementById('dateselect').value;
//     console.log(daytime);
//     // window.location.href = './countdown.html';
// }

function countdown() {
    const newDate = new Date(daytime);
    const CurrentDate = new Date();
    
    const totalSeconds = ((newDate - CurrentDate) / 1000);

    const days = (totalSeconds / 3600 / 24).toFixed(0);
    const hours = ((totalSeconds / 3600) % 24).toFixed(0);
    const mins = ((totalSeconds / 60) % 60).toFixed(0);
    const seconds = ((totalSeconds) % 60).toFixed(0);

    daysId.innerHTML = days;
    hoursId.innerHTML = formateTime(hours);
    minsId.innerHTML = formateTime(mins);
    secondsId.innerHTML = formateTime(seconds);
}

function formateTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
