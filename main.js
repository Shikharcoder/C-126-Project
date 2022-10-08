rristx = "";
lristx = "";
rristy = "";
lristy = "";

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
  poseNet = ml5.poseNet(VIDEO, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function play() {
  bp.play();
}

function draw() {
  image(video, 0, 0, 300, 300);
}
function modelLoaded() {
  console.log("Model is Loaded");
}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    rristx = results[0].pose.rightWrist.x;
    lristx = results[0].pose.leftWrist.x;
    rristy = results[0].pose.rightWrist.y;
    lristy = results[0].pose.leftWrist.y;
    console.log(
      "Left Wrist X = " +
        lristx +
        "Left Wrist Y = " +
        lristy +
        "Right Wrist X = " +
        rristx +
        "Right Wrist Y = " +
        rristy
    );
  }
}
