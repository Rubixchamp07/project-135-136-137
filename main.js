status = "";
objects = [];
objectDetector = "";

function preload(){
}//preload = it keeps it ready to show/html

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();

}//setup = the sequence of showing/css

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Object Detecting';
}

function modelLoaded(){
    console.log('Model Loaded!');
    status = true;
}

function draw(){
    image(video, 0, 0, 380, 380);
}//draw = runs code continously/js