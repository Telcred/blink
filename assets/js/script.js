const lightworldmap = "url('assets/images/lightworldmap.png')";
const darkworldmap = "url('assets/images/darkworldmap.png')";

let dotSizePx = 10;
let durationSec = 3;

document.getElementById("dotSizePx").value = dotSizePx;

document.getElementById("dotSizePx").addEventListener("input", function (event) {
    dotSizePx = Math.max(Math.min(event.target.value, 20), 1)});

document.getElementById("durationSec").value = durationSec;

document.getElementById("durationSec").addEventListener("input", function (event) {
   durationSec = Math.max(Math.min(event.target.value, 10), 1)});

let fullscreenbutton = document.getElementById("fullscreen")
fullscreenbutton.addEventListener("click", openFullscreen);

// Change background and botton color dark/light
let button = document.getElementById("mode")
button.addEventListener("change", switchbackground);

main();

async function main() {
    let continueBlink = true;
    while (continueBlink) {
        await update();
    }
}
async function update() {
    let eventList = makeEventList();
    for (let s = 0; s < 10; s++) {
        printEventsAt(s, eventList);
        await sleep(1000);
    }
}

function printEventsAt(s, eventList) {
    for (let i = 0; i < eventList.length; i++) {
        if (eventList[i].second == s) {
            printCircle(eventList[i].x, eventList[i].y);
        }
    }
}

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

function makeEvent(x, y, second) {
    return {
        x: x,
        y: y,
        second: second
    };
}

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

// Riktig data
// ReadME
// Comments 
// Small screen sizes in Css 
// PROBLEM - Dots 6 > blir rödfärg

