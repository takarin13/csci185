const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#F68E5F", "#F7865F", "#F77D5F", "#F7755F", "#F76C5E"];

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(2); // how many redraws per second

    strokeWeight(0);

    // generate a random x-position, y-position, and size:
    

    // Draw a random circle:
    let counter = 0;
    while (counter < 100) {
        let color = colors[randomInt(0,4)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        circle(x, y, size);
        counter ++;
    }

    counter = 0;
    while (counter < 50) {
        let color = colors[randomInt(0,4)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        square(x, y, size);
        counter ++;
    }
}

/***********************************+*
 * ANIMATION LOOP
 * Anything that you want to animate
 * goes in the draw() function
 * *********************************
 */
function draw() {
    clear();
    let counter = 0;
    while (counter < 100) {
        let color = colors[randomInt(0,4)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        circle(x, y, size);
        counter ++;
    }

    counter = 0;
    while (counter < 50) {
        let color = colors[randomInt(0,4)];
        fill(color);
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);
        square(x, y, size);
        counter ++;
    }
}
