noseX=0;
noseY=0;

difference=0;

leftWristX=0;
rightWristX=0;

function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,100);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function draw(){
background('#ff99c2');
text('Akshaya',noseX,noseY);
textSize(difference);

}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        console.log("Nose X = "+noseX);
        console.log("Nose Y = "+noseY);

        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;

        difference=floor(leftWristX-rightWristX);
        
        console.log("Right Wrist X = "+rightWristX);
        console.log("Left Wrist X = "+leftWristX);
        console.log("Difference = "+difference);
    
    
    }
}