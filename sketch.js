let n = 1;
let c = 4;
let size = 6;
let cSlider, sizeSlider, angleSlider;
function setup() {
    createCanvas(1366, 768);
    angleMode(DEGREES);
    background(0);
    // colorMode(HSB);
    // cSlider = createSlider(2, 10, 3, 0.5);
    // sizeSlider = createSlider(3, 15, 3, 1);
    // angleSlider = createSlider(137, 138, 137.5, 0.1);
}

function draw() {
    for (let i = 0; i < 25; i++) {
        // if (n < 7000) {
        let angle = n * 137.5;
        let radius = c * sqrt(n);

        let x = radius * cos(angle) + width / 2;
        let y = radius * sin(angle) + height / 2;
        fill(46 * n % 256, 92 * n % 256, 23 * n % 256);
        // fill(angle%256, angle%256, radius%256);
        noStroke();
        ellipse(x, y, size, size);
        // ellipse(x, y, size, size);
        n++;
        // }
    }
}


