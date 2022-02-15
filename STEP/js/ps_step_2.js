Homeworks.aufgabe = 2;

let count = 1;
let size = 20;
let f = "red";
let hallo = 5;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  document.addEventListener('click', onMouseClick);
}

function draw() {
  background(40, hallo);
  let c = color(f);
  if (count > 2) {
    c = color(random(0, 256), random(0, 256), random(0, 256));
  }
  fill(c);
  ellipse(Math.random() * windowWidth, Math.random() * windowHeight, size, size);
}

function onMouseClick() {

  switch (count) {

    case 1:
      size = 40;
      count++;
      break;

    case 2:
      count++;
      break;

    case 3:
      hallo = 20;
      count++;
      break;

    case 4:
      size = 20;
      hallo = 5;
      clear();
      count = 1;
      break;

  }
}
