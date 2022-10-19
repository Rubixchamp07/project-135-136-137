status = "";
objects = [];
objectDetector = "";
video = "";

function preload(){
 
}//preload = it keeps it ready to show/html

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,380);
    video.hide();

}//setup = the sequence of showing/css

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Object Detecting';
    object_name = document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log('Model Loaded!');
    status = true;
}

function gotResults(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 480, 380);
        if(status != "")
        {
          objectDetector.detect(video, gotResults);
          for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
  
           
            if(objects[i].label == object_name)
            {
              video.stop();
              objectDetector.detect(gotResults);
              document.getElementById("number_of_objects").innerHTML = object_name + " Found";
              synth = window.speechSynthesis;
              utterThis = new SpeechSynthesisUtterance(object_name + "Found");
              synth.speak(utterThis);
            }
            else
            {
              document.getElementById("number_of_objects").innerHTML = object_name + " Not Found";
            }          
           }
        }
  }//draw = runs code continously/js