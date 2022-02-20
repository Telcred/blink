// This code prints out batches of events. 
// Each event has a position and a time of occurrence. 
// A batch of events is a collection of events that have occurred within 60 seconds of each other. 
// Each batch gets printed as it occurred in real time, during 60 seconds. 
// A new batch is fetched every 60 seconds and the process never stops. 
// This version was created as a demo and fetches its data from data.js. 

//Set up for the background image in dark and light color.
const lightworldmap = "url('assets/images/lightworldmaps.png')";
const darkworldmap = "url('assets/images/darkworldmaps.png')";

// Set up the control for the dot size.
let dotSizePx = 5;
document.getElementById("dotSizePx").value = dotSizePx;
document.getElementById("dotSizePx").addEventListener("input", function (event) {
    dotSizePx = Math.max(Math.min(event.target.value, 20), 1);
});

//Set up the control for dot duration. 
let durationSec = 3;
document.getElementById("durationSec").value = durationSec;
document.getElementById("durationSec").addEventListener("input", function (event) {
    durationSec = Math.max(Math.min(event.target.value, 10), 1);
});

//Set up the control for fullscreen button.
let fullscreenbutton = document.getElementById("fullscreen");
fullscreenbutton.addEventListener("click", openFullscreen);

// Set up the control for changing background and button color between dark and light.
let button = document.getElementById("mode");
button.addEventListener("change", switchbackground);

// Run the application.
main();



/**
 * Print out new batches of event repeatedly.
 */
async function main() {
    while (true) {
        await printBatch();
    }
}

/**
 * Fetch a batch of events that have occurred within 60 seconds of each other.
 * Print each as it occurred in real time. 
 */
async function printBatch() {
    let eventList = await fetchBatch();
    for (let targetSecond = 0; targetSecond < 59; targetSecond++) {
        printEventsBySec(eventList, targetSecond);
        await sleep(1000);
    }
}

/**
 * Print a dot for each given event, 
 * but only those who’s second match a given second. 
 * @param {array} eventList - The given events.
 * @param {int} targetSecond - The given second.
 */
function printEventsBySec(eventList, targetSecond) {
    for (let i = 0; i < eventList.length; i++) {
        if (eventList[i].second == targetSecond) {
            printCircle(eventList[i].x, eventList[i].y);
        }
    }
}

/**
 * Create an event. Events have a position and a time of occurrence.
 * @param {int} x - Horizontal position [0, 99].
 * @param {int} y - Vertical position [0, 99].
 * @param {int} second - Time of occurrence in seconds [0, 59].
 * @returns The created event.
 */
function makeEvent(x, y, second) {
    return {
        x: x,
        y: y,
        second: second
    };
}

/**
 * Print and remove a circle at a given location. 
 * To determine the size of circle the global dotSizePx is used. 
 * To determine the time between printing and removing the global durationSec is used.
 * @param {int} x - Horizontal position [0, 99].
 * @param {int} y - Vertical position [0, 99].
 */
async function printCircle(x, y) {
    await sleep(Math.random() * 1000);
    let blinkingDot = document.createElement("div");
    document.getElementById("map").appendChild(blinkingDot);
    blinkingDot.setAttribute('class', 'blinkingDot');
    blinkingDot.style.position = "absolute";
    blinkingDot.style.left = x + "%";
    blinkingDot.style.top = y + "%";
    blinkingDot.style.height = dotSizePx + "px";
    blinkingDot.style.width = dotSizePx + "px";
    await sleep(durationSec * 1000); // Wait for time to remove.
    blinkingDot.remove();
}

/**
 * Wait the given milliseconds.
 * @param {int} ms - The given number of milliseconds.
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Toggle between dark mode and light mode.
 */
function switchbackground() {
    let bodystyle = document.getElementById("map").style;
    let buttonstyle = document.getElementById("fullscreen").style;
    let modeSelection = document.getElementById("mode").value;
    if (modeSelection == "dark") {
        buttonstyle.backgroundColor = "#000000";
        bodystyle.backgroundImage = darkworldmap;

    } else {
        buttonstyle.backgroundColor = "#ffffff";
        bodystyle.backgroundImage = lightworldmap;

    }
}

/**
 * Enter fullscreen mode. 
 */
function openFullscreen() {
    let map = document.getElementById("map");
    if (map.requestFullscreen) {
        map.requestFullscreen();
    } else if (map.webkitRequestFullscreen) {
        map.webkitRequestFullscreen(); // Safari 
    } else if (map.msRequestFullscreen) {
        map.msRequestFullscreen(); // IE11 
    }
}

async function fetchBatch() {
	let response = await fetch("https://access.telcred.com/open/events/plot");
	let data = await response.json();	

	let result = [];
	for (let i = 0; i < data.length; i++){
		let d = data[i];
		let x = (180+d.longitude-11)/3.6;
		let y = (90-d.latitude+12)/(1.8-0.2);
		result.push(makeEvent(
			x,
			y,
			d.second));
	}
	return result;
}