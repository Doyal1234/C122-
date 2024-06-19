x = 0;
y = 0;
screen_width=0;
screen_height=0;
orange="";
speak_data="";
draw_apple = "";
to_number="";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
orange=loadImage("orange.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {



if(Number.isInteger(to_number)) {
  document.getElementById("status").innerHTML = "Started drawing orange";  
  draw_apple="set";
}
else{
  document.getElementById("status").innerHTML = "The speech has not recognized a number";  
}
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number=Number(content);

}

function setup() {
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
  createCanvas(screen_width,screen_height-150);

  background("pink");
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Oranges drawn";
    draw_apple = "";
    speak_data=to_number+"Oranges drawn"
    speak();
    for(i=1; i<to_number; i++){
    x=Math.floor(Math.random()*700);
    y=Math.floor(Math.random()*400);
    image(orange,x,y,50,50)
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
