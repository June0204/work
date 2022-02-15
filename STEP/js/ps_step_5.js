Homeworks.aufgabe = 5;

let fields = [];

class Block {

  constructor(attrs) {
    this.attrs = attrs;
    if (this.attrs.useRect) {
      this.drawFunc = rect;
    } else {
      this.drawFunc = ellipse;
    }
  }

  draw() {
    fill(this.attrs.color);
    this.drawFunc(this.attrs.pos.x, this.attrs.pos.y, this.attrs.size, this.attrs.size);
  }

  changeColor(newColor) {
    if (this.drawFunc == rect) {
      this.attrs.color = newColor;
    }
  }
}

let size = 20;
let gap = 0;
let numCol = 15;
let numRow = 15;
let actCol = 0;
let actRow = 0;
let zufallCol
let zufallRow
let gameover = false;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');

  let patternWidth = (size + gap) * numCol - gap;
  let borderX = (windowWidth - patternWidth) / 2;
  let patternHeight = (size + gap) * numRow - gap;
  let borderY = (windowHeight - patternHeight) / 2;
  zufallCol = round(random([0], [numCol]));
  zufallRow = round(random([0], [numRow]));

  for (let col = 0; col < numCol; col += 1) {
    fields[col] = [];
    for (let row = 0; row < numRow; row++) {
      fields[col][row] = new Block({
        color: 'red',
        pos: {
          x: borderX + col * (size + gap),
          y: borderY + row * (size + gap)
        },
        size: size,
        useRect: true,
        hallo: false
      });
    }
  }

  fields[actCol][actRow].changeColor('magenta');
  fields[zufallCol][zufallRow].changeColor('green');
}

function draw() {
  //clear();
  for (let col = 0; col < numCol; col += 1) {
    for (let row = 0; row < numRow; row++) {
      fields[col][row].draw();
    }
  }

}

//Hide the HTML Text with h and show it again with s
function keyPressed(evt) {
  evt.preventDefault();
  let divToHide = document.getElementsByClassName("overlay")[0];
  //divToHide.innerHTML = 'Hallo IG1!'
  switch (key) {
    case "h":
      divToHide.style.visibility = "hidden";
      break;
    case "s":
      divToHide.style.visibility = "visible";
      break;
    case "ArrowUp":

      fields[actCol][actRow].changeColor('red');
      if (actRow > 0) {
        actRow = actRow - 1;
      } else {
        actRow = numRow - 1;
      }
      if (fields[actCol][actRow].attrs.color == 'green') {
        gameover = true;
      }

      console.log("UP");
      break;
    case "ArrowDown":
      fields[actCol][actRow].changeColor('red');

      actRow = (actRow + 1) % numRow;

      console.log("DOWN");
      break;
    case "ArrowRight":
      fields[actCol][actRow].changeColor('red');

      actCol = (actCol + 1) % numCol;

      console.log("Right");
      break;
    case "ArrowLeft":
      fields[actCol][actRow].changeColor('red');
      if (actCol > 0) {
        actCol = actCol - 1;
      } else {
        actCol = numCol - 1;
      }

      console.log("Left");
      break;
    default:
      console.log(key)
      break;
  }
  if (fields[actCol][actRow].attrs.color == 'green') {

    console.log("GAMEOVER");

    setTimeout(function() {
      alert("GAMEOVER");
    }, 100);
    fields[round(random(0, numCol - 1))][round(random(0, numRow - 1))].changeColor('green');
  }
  fields[actCol][actRow].changeColor('magenta');
}
