var hour = 0;
var minute = 0;
var second = 0;
var sec100 = 0;
var millisecond = 0;
var startTime;
var endTime;
var addTime;

var timerId;

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var time = document.getElementById('time');

function resetStopWatch() {
  addTime = 0;
  millisecond = 0;
  sec100 = 0;
  second = 0;
  minute = 0;
  hour = 0;
  time.innerHTML = "00:00:00.00";
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
}


function startTimer() {
  timerId = setTimeout(run, 10);
  startTime = new Date().getTime();
  start.disabled = true;
  stop.disabled = false;
  addTime = (hour * 60 * 60 * 1000 + minute * 60 * 1000 + second * 1000 + millisecond);
  startTime = startTime - addTime;
}

function stopTimer() {
  clearTimeout(timerId);
  endTime = new Date().getTime;
  stop.disabled = true;
  start.disabled = false;
  reset.disabled = false;
  setTime();
}

function resetTimer() {
  resetStopWatch();
}

function run() {
  endTime = new Date().getTime();
  diff = new Date(endTime - startTime);

  millisecond = diff.getMilliseconds();
  sec100 = Math.floor(millisecond / 10);
  second = diff.getSeconds();
  minute = diff.getMinutes();
  hour = diff.getHours() - 9;

  setTime();
  timerId = setTimeout(run, 10);
}


function setTime() {
  var strTime = "";
  var strSec100, strSec, strMin, strHour;

  strSec100 = "" + sec100;
  if (strSec100.length < 2) {
    strSec100 = "0" + strSec100;
  }
  strSec = "" + second;
  if (strSec.length < 2) {
    strSec = "0" + strSec;
  }
  strMin = "" + minute;
  if (strMin.length < 2) {
    strMin = "0" + strMin;
  }
  strHour = "" + hour;
  if (strHour.length < 2) {
    strHour = "0" + strHour;
  }

  strTime = strHour + ":" + strMin + ":" + strSec + "." + strSec100;
  time.innerHTML = strTime;
}

window.onload = function () {
  resetStopWatch();
}