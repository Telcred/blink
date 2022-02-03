main();

async function main() {
    await demo();
    while (i = i) {

    }
}


function clean() {
    document.body.innerHTML = '<img class="logo" src="assets/images/logo_orange_on_transparent.png">';
}
async function demo() {
    addSquare(20, 80);
    await sleep(1000);
    clean();
    addSquare(90, 10);
    await sleep(1000);
    clean();
    addSquare(70, 30);
    await sleep(1000);
    clean();
    addSquare(50, 80);
    await sleep(1000);
    clean();
}

function addSquare(x, y) {
    let square = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(square);
    square.setAttribute('class', 'square');
    square.style.position = "absolute"
    square.style.left = x + "%";
    square.style.top = y + "%";


}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}