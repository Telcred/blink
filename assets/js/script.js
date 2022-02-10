//Set up for the background image in dark and light color.
const lightworldmap = "url('assets/images/lightworldmaps.png')";
const darkworldmap = "url('assets/images/darkworldmaps.png')";

// Set up the control for the dot size.
let dotSizePx = 10;
document.getElementById("dotSizePx").value = dotSizePx;
document.getElementById("dotSizePx").addEventListener("input", function (event) {
    dotSizePx = Math.max(Math.min(event.target.value, 20), 1)
});

//Set up the control for dot duration. 
let durationSec = 3;
document.getElementById("durationSec").value = durationSec;
document.getElementById("durationSec").addEventListener("input", function (event) {
    durationSec = Math.max(Math.min(event.target.value, 10), 1)
});

//Set up the control for fullscreen button.
let fullscreenbutton = document.getElementById("fullscreen")
fullscreenbutton.addEventListener("click", openFullscreen);

/**
 * Set up the inpact for changing background
 * and button color between dark and light.
 */
let button = document.getElementById("mode")
button.addEventListener("change", switchbackground);

main();

/**
 * Print out updated data repeatedly, but only if continueBlink 
 * match with the givn statment, true. 
 */
async function main() {
    let continueBlink = true;
    while (continueBlink) {
        await update();
    }
}

/**
 * Fetch events that have occurred within 10 seconds of each other.
 * Print each as occurred in real time. 
 */
async function update() {
    let eventList = makeEventList();
    for (let targetSecond = 0; targetSecond < 10; targetSecond++) {
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
 * Given information for each event. 
 * Return correct data when printing each dot.
 * @returns answer - correct data
 */
function makeEventList() {
    let answer = [];
    answer.push(makeEvent(28, 90, 3));
    answer.push(makeEvent(30, 65, 7));
    answer.push(makeEvent(65, 50, 3));
    answer.push(makeEvent(30, 75, 2));
    answer.push(makeEvent(25, 60, 4));
    answer.push(makeEvent(55, 35, 5));
    answer.push(makeEvent(80, 30, 3));
    answer.push(makeEvent(30, 10, 9));
    answer.push(makeEvent(51, 40, 3));
    answer.push(makeEvent(15, 40, 1));
    answer.push(makeEvent(45, 60, 3));
    answer.push(makeEvent(50, 25, 3));
    return answer;
}
/**
 * 
 * @param {array} x 
 * @param {array} y 
 * @param {array} second 
 * @returns 
 */
function makeEvent(x, y, second) {
    return {
        x: x,
        y: y,
        second: second
    };
}

/**
 * 
 * @param {*} x 
 * @param {*} y 
 */
async function printCircle(x, y) {
    let square = document.createElement("div");
    document.getElementById("map").appendChild(square);
    square.setAttribute('class', 'square');
    square.style.position = "absolute";
    square.style.left = x + "%";
    square.style.top = y + "%";
    square.style.height = dotSizePx + "px";
    square.style.width = dotSizePx + "px";
    await sleep(durationSec * 1000);
    square.remove();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Returns light or dark background
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

// Fullscreen including Safari & IE11
function openFullscreen() {
    let doc = document.getElementById("map");
    if (doc.requestFullscreen) {
        doc.requestFullscreen();
    } else if (doc.webkitRequestFullscreen) {
        /* Safari */
        doc.webkitRequestFullscreen();
    } else if (doc.msRequestFullscreen) {
        /* IE11 */
        doc.msRequestFullscreen();
    }
}

// ReadME
// Comments 