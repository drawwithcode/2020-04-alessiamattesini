
function preload(){


}

function setup() {


  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.position(windowWidth/2-capture.width/2,windowHeight/2-capture.height/2);
  capture.style("background-color", "#FFE548");

  write = createP("Wow, you look so beautiful! :D");
  write.position(windowWidth/2-write.width/8, windowHeight/2-300);
  write.style("color:white; font-size:25px;");

  happypikachu = createP("Click the Happy Pikachu!");
  happypikachu.position(write.x+20, write.y+100);
  happypikachu.style("color:white; font-size:25px;");

  pikachu = createImg('./assets/pikachu.png');
  pikachu.addClass('rotation');
  pikachu.position(windowWidth/2, windowHeight/2);
  pikachu.mousePressed(happy_song);

}

function draw() {



}

function happy_song(){

window.open('https://www.youtube.com/watch?v=tsxwGnDfvWE', '_self')

}
