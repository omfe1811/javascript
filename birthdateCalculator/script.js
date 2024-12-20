//oppgave how many days passed since 05.06.98
//coneecting html to js
let buttoncap = document.getElementById("buttoncap");
let getButton = document.getElementById("startstopbutton");
let howMuchTime = document.getElementById("timePassed");
let calendarInput = document.getElementById("calendar");
let today = new Date();
//calculating time passed
function calculateTime() {
  //take date from html input
  let birthday = new Date(calendarInput.value);
  //how much time has passed since the set day til today
  let timeSinceBirthMili = today - birthday;
  //how many years
  let timeSinceBirthYears = timeSinceBirthHours / 24 / 365;
  //how many months
  let timeSinceBirthMonths = timeSinceBirthHours / 24 / 12;
  //how many days
  let timeSinceBirthDays = timeSinceBirthHours / 24;
  //how many hours
  let timeSinceBirthHours = timeSinceBirthSeconds / 60 / 60;
  //how many seconds
  let timeSinceBirthSeconds = timeSinceBirthMili / 1000;
  howMuchTime.innerText =
    "Years since your birth: " +
    timeSinceBirthYears +
    "\nMonths since your birth: " +
    timeSinceBirthMonths +
    "\nDays since your birth: " +
    timeSinceBirthDays +
    "\nHours since your birth: " +
    timeSinceBirthHours +
    "\nSeconds since your birth: " +
    timeSinceBirthSeconds;
}
