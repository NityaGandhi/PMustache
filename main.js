nosex = 0
nosey = 0

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw (){
image(video, 0, 0, 375, 300);
image(clown_nose, nosex +10, nosey -20, 55, 55);
}
function take_snapshot(){
save('myFilterImage.png');
}
function preload(){
  clown_nose = loadImage("https://i.postimg.cc/pV5fvbTB/mustache-image.png")
}

function modelLoaded(){
  console.log('PoseNet is Initialized');
}

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("nose x = " + nosex);
    console.log("nose y = " + nosey);
  }
}


