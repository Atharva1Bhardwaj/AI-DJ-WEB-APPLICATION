song = "";
leftWristX = 0 ;
leftWristY = 0 ;
rightWristX = 0 ;
rightWristY = 0 ;
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 500, 500);
}
function preload(){
    song = loadSound("music.mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("Model is Loaded");
}
function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log(leftWristX, leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log(rightWristX, rightWristY);
    }
}