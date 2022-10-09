rristx = "";
lristx = "";
rristy = "";
lristy = "";
song1stats = "";
song2stats = "";
lristscore = "";
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

function draw() {
  image(video, 0, 0, 300, 300);

  song1stats = bp.isPlaying();

  fill("#FF0000");
  stroke("#FF0000");

  if (lristscore > 0.2) {
    circle(lristx, lristy, 20);
    ed.stop();
    if (song1stats == false) {
      bp.play();
      document.getElementById("song").innerHTML =
        "Song : BLACKPINK(Pink Venom)";
    }
  }
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
    lristscore = results[0].pose.keypoints[9].score;
    console.log("Left Wrist Score = " + lristscore);
  }
}
