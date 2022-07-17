const dateTime = document.querySelector("#dateTime");

function timer() {
  let curTime = new Date();

  const yearStr = curTime.getFullYear();
  const monthStr = String(`${curTime.getMonth()+1}`).padStart(2,'0');
  const dayStr = String(`${curTime.getDate()}`).padStart(2,'0');

  const hoursStr = String(`${curTime.getHours()}`).padStart(2,'0');
  const minutesStr = String(`${curTime.getMinutes()}`).padStart(2,'0');
  const secStr = String(`${curTime.getSeconds()}`).padStart(2,'0');
  
  dateTime.innerText = `${yearStr}-${monthStr}-${dayStr} ${hoursStr}:${minutesStr}:${secStr}`;
}
timer();
setInterval(timer, 1000);



