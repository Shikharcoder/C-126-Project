nX = 0;
nY = 0;
rristX = 0;
lristX = 0;
dif = 0;

function preload() {}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.position(0, 90);
  video = createCapture(VIDEO);
  video.hide();
  video.size(450, 450);
  poseNet = ml5.poseNet(VIDEO, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function draw() {
  textSize(difference);
  fill(50);
  text("Shikhar", 250, 250);
  background("#0aa7f0");
}
function modelLoaded() {
  console.log("Model is Loaded");
}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    rristX = results[0].pose.rightWrist.x;
    lristX = results[0].pose.leftWrist.x;
    dif = rristX - lristX;
  }
}
difference = Math.floor(dif);
