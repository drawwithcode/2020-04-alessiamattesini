
function preload(){


}

function setup() {

  createCanvas(windowWidth,windowHeight)
  background('#eda2f2');


  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.position(windowWidth/2-capture.width/2,windowHeight/2-capture.height/2);

  write = createP("Oh, 'cmon try to smile!");
  write.position(windowWidth/2-write.width/8, windowHeight/2-300);
  write.style("color:white; font-size:25px;");

  sosoditto = createP("Click Ditto for a surprise!");
  sosoditto.position(write.x+20, write.y+100);
  sosoditto.style("color:white; font-size:25px;");

  ditto = createImg('./assets/ditto.png');
  ditto.addClass('rotation');
  ditto.position(windowWidth/2, windowHeight/2);
  ditto.mousePressed(soso_song);
  ditto.style("transform: rotate");

}

function draw() {



}

function soso_song(){

window.open('https://youtu.be/Z1UO91TmOsY', '_self');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#eda2f2');
}
