
function preload(){


}

function setup() {

  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.position(windowWidth/2-capture.width/2,windowHeight/2-capture.height/2);
  capture.style("background-color", "#7192BE");

  write = createP("Oh no, why are you so sad? :(");
  write.position(windowWidth/2-write.width/8, windowHeight/2-300);
  write.style("color:white; font-size:25px;");

  paragraph = createP("Click Sobble and discover the best singer ever");
  paragraph.position(write.x+20, write.y+100);
  paragraph.style("color:white; font-size:25px;");

  sobble = createImg('./assets/sobble.png');
  sobble.addClass('rotation');
  sobble.position(windowWidth/2, windowHeight/2);
  sobble.mousePressed(sad_song);

}

function draw() {



}

function sad_song(){

window.open('https://www.youtube.com/watch?v=zB_q1I0leoI', '_self');

}
