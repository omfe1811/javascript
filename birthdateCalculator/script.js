//oppgave how many days passed since 05.06.98
let buttoncap = document.getElementById("buttoncap");
let getButton = document.getElementById("startstopbutton");
let howMuchTime = document.getElementById("timePassed");
let calendarInput = document.getElementById("calendar");
let today = new Date();
function calculateTime() {
  let birthday = new Date(calendarInput.value);
  let timeSinceBirthMili = today - birthday;
  let timeSinceBirthYears = timeSinceBirthMili / 1000 / 60 / 60 / 24 / 365;
  let timeSinceBirthMonths = timeSinceBirthMili / 1000 / 60 / 60 / 24 / 12;
  let timeSinceBirthDays = timeSinceBirthMili / 1000 / 60 / 60 / 24;
  let timeSinceBirthHours = timeSinceBirthMili / 1000 / 60 / 60;
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
