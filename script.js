let time = {
  hours: 20,
  minutes: 59,
  seconds: 45
};

function showTime() {
  let h = time.hours < 10 ? "0" + time.hours : time.hours;
  let m = time.minutes < 10 ? "0" + time.minutes : time.minutes;
  let s = time.seconds < 10 ? "0" + time.seconds : time.seconds;
  console.log(`${h}:${m}:${s}`);
}

function addSeconds(seconds) {
  time.seconds += seconds;

  if (time.seconds >= 60) {
    time.minutes += Math.floor(time.seconds / 60);
    time.seconds = time.seconds % 60;
  }

  if (time.minutes >= 60) {
    time.hours += Math.floor(time.minutes / 60);
    time.minutes = time.minutes % 60;
  }

  if (time.hours >= 24) {
    time.hours = time.hours % 24;
  }
}

function addMinutes(minutes) {
  time.minutes += minutes;

  if (time.minutes >= 60) {
    time.hours += Math.floor(time.minutes / 60);
    time.minutes = time.minutes % 60;
  }

  if (time.hours >= 24) {
    time.hours = time.hours % 24;
  }
}

function addHours(hours) {
  time.hours += hours;
  if (time.hours >= 24) {
    time.hours = time.hours % 24;
  }
}

//тут можна провіряти як працює.
showTime();
console.log("+30 sec")

addSeconds(30);
showTime();
console.log("+15 m")

addMinutes(15);
showTime();
console.log("+2 h")

addHours(2);
showTime();      