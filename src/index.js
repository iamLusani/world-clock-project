function updateDurbanTime() {
  let dateElement = document.querySelector(".durbanDate");
  let durbanDate = moment().tz("Africa/Johannesburg").format("Do, MMMM YYYY");

  let timeElement = document.querySelector("#durTime");
  let durbanTime = moment().tz("Africa/Johannesburg").format("HH:mm:ss");

  dateElement.innerHTML = `${durbanDate}`;
  timeElement.innerHTML = `${durbanTime}`;
}
setInterval(updateDurbanTime, 100);

function refreshLondenTime() {
  let DateElement = document.querySelector("#londenDate");
  let londenDate = moment().tz("Europe/London").format("Do, MMMM YYYY");

  let timeForLonden = document.querySelector("#timeForLonden");
  let timeElement = moment().tz("Europe/London").format("HH:mm:ss");

  DateElement.innerHTML = `${londenDate}`;
  timeForLonden.innerHTML = `${timeElement}`;
}
setInterval(refreshLondenTime, 100);

function reloadJapenTime() {
  let DateElement = document.querySelector("#japenDateee");
  let japenDate = moment().tz("Asia/Jerusalem").format("Do, MMMM YYYY");

  let timeForJapen = document.querySelector("#AsiaTim");
  let elementForTime = moment().tz("Asia/Jerusalem").format("HH:mm:ss");

  DateElement.innerHTML = `${japenDate}`;
  timeForJapen.innerHTML = `${elementForTime}`;
}
setInterval(reloadJapenTime, 100);

function newJerseyRefresh() {
  let dateElement = document.querySelector("#newMonth");
  let newjerseyDate = moment().tz("America/New_York").format("Do, MMMM YYYY");

  let timeElement = document.querySelector("#jerseyIme");
  let jerseyTime = moment().tz("America/New_York").format("HH:mm:ss");

  dateElement.innerHTML = `${newjerseyDate}`;
  timeElement.innerHTML = `${jerseyTime}`;
}
setInterval(newJerseyRefresh, 100);
