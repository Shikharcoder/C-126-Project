function preload() {
  bp = "pinkvenom.mp3";
  ed = "soy.mp3";
  console.log(bp, ed);
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 300, 300);
}
