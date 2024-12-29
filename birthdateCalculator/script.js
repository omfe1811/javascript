//oppgave how many days passed since 05.06.98
//conecting html to js
let buttoncap = document.getElementById("buttoncap");
let getButton = document.getElementById("startstopbutton");
let howMuchTime = document.getElementById("timePassed");
let calendarInput = document.getElementById("calendar");

//calculating time passed
function calculateTime() {
  //set today as a current day
  let today = new Date();
  //take date from html input
  let birthday = new Date(calendarInput.value);
  //how much time has passed since the set day til today
  let timeSinceBirthMili = today - birthday;
  //how many seconds miliseconds/1000
  let timeSinceBirthSeconds = Math.floor(timeSinceBirthMili / 1000);
  //how many minutes seconds/60
  let timeSinceBirthMinutes = Math.floor(timeSinceBirthSeconds / 60);
  //how many hours seconds/60-minutes/60-hours
  let timeSinceBirthHours = Math.floor(timeSinceBirthSeconds / 60 / 60);
  //how many days=hours/24
  let timeSinceBirthDays = Math.floor(timeSinceBirthHours / 24);
  //how many years days/365
  let timeSinceBirthYears = Math.floor(timeSinceBirthDays / 365);
  /// how many months passed years/52
  let timeSinceBirthMonths =
    timeSinceBirthYears * 12 + (today.getMonth() - birthday.getMonth());
  let dogYears = timeSinceBirthYears * 7;

  //display calculations as a message
  let message =
    (howMuchTime.innerText = `Time passed since your birth:\n Years: ${timeSinceBirthYears}\n Months: ${timeSinceBirthMonths}\n Days: ${timeSinceBirthDays}\n Hours: ${timeSinceBirthHours}h\n Minutes: ${timeSinceBirthMinutes}min\n Seconds: ${timeSinceBirthSeconds}s\n Dog years: ${dogYears}`);

  // display birthday message and calculations
  let birthdayMessage = `Happy Birthday!!!\n ${message}`;

  //if the input is date in the future
  if (calendarInput.value === "") {
    howMuchTime.innerText = "No date selected";
    return;
  }
  //input is the current date

  if (
    birthday.getFullYear() === today.getFullYear() &&
    birthday.getMonth() === today.getMonth() &&
    birthday.getDate() === today.getDate()
  ) {
    timeSinceBirthHours = 0;
    timeSinceBirthMinutes = 0;
    timeSinceBirthSeconds = 0;
    let myTimer = setInterval(() => {
      var time = new Date().getSeconds();
      howMuchTime.innerText = time;
      /*you need to update the timer inside the setInterval function, only the 
  code in here will update every second*/
    }, 1000);

    howMuchTime.innerText = `You're ${myTimer}s old!`;
    return;
  }
  //display an error message if the date is in the future
  if (birthday > today) {
    howMuchTime.innerText = "Your birthday can't be in the future!";
    return;
  }

  //check if today is the birthday
  if (
    birthday.getMonth() == today.getMonth() &&
    birthday.getDate() == today.getDate()
  ) {
    //print out the birthday message and calculations
    howMuchTime.innerText = birthdayMessage;
  } else {
    //if its not the birthday display just the calculations
    howMuchTime.innerText = message;
  }
}
