// display current day at top of calender
// grab p tag at top of screen
// set textcontent to moment.format
var currentMinutes;
var currentDayText = document.getElementById("currentDay");
currentDay = moment().format("MMMM Do, YYYY, HH:mm");
// console.log(currentDay);

var currentHour = currentDay.slice(currentDay.length - 5, currentDay.length);

currentDayText.textContent = currentDay;

// set background color of time-blocks depending on what time it is

// return current time as unix
// var daySeconds = moment().unix() % 86000;
// var daySeconds = (86000 - daySeconds) / 3600;
// var daySeconds = moment().unix();
// console.log(daySeconds);

var currentTime = currentHour.split(":");

console.log(currentTime);

function convertHour(currentTime) {
   let currentMinutes = currentTime[0] * 60 + currentTime[1];
   console.log(currentMinutes);
   return currentMinutes;
}
// convertHour(currentTime);


// if statements comparing currentTime to time on calender

if (convertHour(currentTime) > 9 * 60) {
    let nineAm = document.getElementById("block9am");
    nineAm.classList.add('past');
} else if (convertHour(currentTime) < 9 * 60) {
    let nineAm = document.getElementById("block9am");
    nineAm.classList.add('future');
} else {
    let nineAm = document.getElementById("block9am");
    nineAm.classList.add('present');
}

if (convertHour(currentTime) > 10 * 60) {
    let tenAm = document.getElementById("block10am");
    tenAm.classList.add('past');
} else if (convertHour(currentTime) < 10 * 60) {
    let tenAm = document.getElementById("block10am");
    tenAm.classList.add('future');
} else {
    let tenAm = document.getElementById("block10am");
    tenAm.classList.add('present');
}

if (convertHour(currentTime) > 11 * 60) {
    let elevenAm = document.getElementById("block11am");
    elevenAm.classList.add('past');
} else if (convertHour(currentTime) < 11 * 60) {
    let elevenAm = document.getElementById("block11am");
    elevenAm.classList.add('future');
} else {
    let elevenAm = document.getElementById("block11am");
    elevenAm.classList.add('present');
}

if (convertHour(currentTime) > 12 * 60) {
    let twelvePm = document.getElementById("block12pm");
    twelvePm.classList.add('past');
} else if (convertHour(currentTime) < 12 * 60) {
    let twelvePm = document.getElementById("block12pm");
    twelvePm.classList.add('future');
} else {
    let twelvePm = document.getElementById("block12pm");
    twelvePm.classList.add('present');
}

if (convertHour(currentTime) > 13 * 60) {
    let onePm = document.getElementById("block1pm");
    onePm.classList.add('past');
} else if (convertHour(currentTime) < 13 * 60) {
    let onePm = document.getElementById("block1pm");
    onePm.classList.add('future');
} else {
    let onePm = document.getElementById("block1pm");
    onePm.classList.add('present');
}

if (convertHour(currentTime) > 14 * 60) {
    let twoPm = document.getElementById("block2pm");
    twoPm.classList.add('past');
} else if (convertHour(currentTime) < 14 * 60) {
    let twoPm = document.getElementById("block2pm");
    twoPm.classList.add('future');
} else {
    let twoPm = document.getElementById("block2pm");
    twoPm.classList.add('present');
}

if (convertHour(currentTime) > 15 * 60) {
    let threePm = document.getElementById("block3pm");
    threePm.classList.add('past');
} else if (convertHour(currentTime) < 15 * 60) {
    let threePm = document.getElementById("block3pm");
    threePm.classList.add('future');
} else {
    let threePm = document.getElementById("block3pm");
    threePm.classList.add('present');
}

if (convertHour(currentTime) > 16 * 60) {
    let fourPm = document.getElementById("block4pm");
    fourPm.classList.add('past');
} else if (convertHour(currentTime) < 16 * 60) {
    let fourPm = document.getElementById("block4pm");
    fourPm.classList.add('future');
} else {
    let fourPm = document.getElementById("block4pm");
    fourPm.classList.add('present');
}

if (convertHour(currentTime) > 17 * 60) {
    let fivePm = document.getElementById("block5pm");
    fivePm.classList.add('past');
} else if (convertHour(currentTime) < 17 * 60) {
    let fivePm = document.getElementById("block5pm");
    fivePm.classList.add('future');
} else {
    let fivePm = document.getElementById("block5pm");
    fivePm.classList.add('present');
}