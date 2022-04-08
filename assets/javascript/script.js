// display current day at top of calender
// grab p tag at top of screen
// set textcontent to moment.format

var currentDayText = document.getElementById("currentDay");

currentDay = moment().format("MMMM Do, YYYY");

currentDayText.textContent = currentDay;

// set background color of time-blocks depending on what time it is

// return current time as unix
var daySeconds = Math.floor(moment().unix());

console.log(daySeconds);

// if (daySeconds > i) {

// }

