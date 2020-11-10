
function preload(){


}

function setup() {

  createCanvas(windowWidth,windowHeight)
  background('#7192BE');


  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.position(windowWidth/2-capture.width/2,windowHeight/2-capture.height/2);

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
  sobble.style("transform: rotate");

}

function draw() {



}

function sad_song(){

window.open('https://www.youtube.com/watch?v=zB_q1I0leoI', '_self');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#7192BE');
}
