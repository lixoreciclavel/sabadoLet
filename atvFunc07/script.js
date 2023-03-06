const format = (date) => {
  date = String(date).padStart(2, "0");
  return date;
};

const countdown = () => {
  const countDate = new Date("Jul 26, 2024 00:00:00").getTime();
  const nowDate = new Date().getTime();
  const gapToEvent = countDate - nowDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gapToEvent / day);
  const textHour = Math.floor((gapToEvent % day) / hour);
  const textMinute = Math.floor((gapToEvent % hour) / minute);
  const textSecond = Math.floor((gapToEvent % minute) / second);

  document.querySelector(".day").innerHTML = format(textDay);
  document.querySelector(".hour").innerHTML = format(textHour);
  document.querySelector(".minute").innerHTML = format(textMinute);
  document.querySelector(".second").innerHTML = format(textSecond);
};

setInterval(countdown, 1000);
