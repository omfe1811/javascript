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
  //how many seconds miliseconds/1000
  let timeSinceBirthSeconds = Math.floor(timeSinceBirthMili / 1000);
  //how many hours seconds/60-minutes/60-hours
  let timeSinceBirthHours = Math.floor(timeSinceBirthSeconds / 60 / 60);
  //how many days=hours/24
  let timeSinceBirthDays = Math.floor(timeSinceBirthHours / 24);
  //how many years days/365
  let timeSinceBirthYears = Math.floor(timeSinceBirthDays / 365);
  /// how many months passed years/52
  let timeSinceBirthMonths = Math.floor(timeSinceBirthYears / 12);
  //display calculations as a message
  let message = (howMuchTime.innerText =
    "Time passed: \n" +
    "Years since your birth: " +
    timeSinceBirthYears +
    "\nMonths since your birth: " +
    timeSinceBirthMonths +
    "\nDays since your birth: " +
    timeSinceBirthDays +
    "\nHours since your birth: " +
    timeSinceBirthHours +
    "\nSeconds since your birth: " +
    timeSinceBirthSeconds);

  // display birthday message and calculations
  let birthdayMessage = "Happy Birthday!!!\n" + message;
  //if the input is date in the future
  if (birthday > today) {
    document.getElementById("howmuchtime").innerText =
      "Your birthday can't be in the future!";
    return;
  }
  //check if today is the birthday
  if (
    birthday.getMonth() == today.getMonth() &&
    birthday.getDate() == today.getDate()
  ) {
    howMuchTime.innerText = birthdayMessage;
  } else {
    //if its not the birthday display just the calculations
    howMuchTime.innerText = message;
  }
}
