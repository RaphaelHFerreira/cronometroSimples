var sec = 00;
var min = 00;
var hora = 00;
var interval;

function start() {
  contador();
  interval = setInterval(contador, 1000);
}

function pause() {
  clearInterval(interval);
}

function stop() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  document.getElementById("watch").innerText = "00:00:00";
}

function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}

function contador() {
  sec++;
  if (sec === 60) {
    min++;
    sec = 0;
    if (min === 60) {
      hora++;
      sec = 0;
      min = 0;
    }
  }
  document.getElementById("watch").innerText =
    twoDigits(hora) + ":" + twoDigits(min) + ":" + twoDigits(sec);
}
