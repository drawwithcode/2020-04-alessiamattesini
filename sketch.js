let happy;
let sad;
let soso;


function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background('black');

  //write your name
  yourname = createInput();
  yourname.position((windowWidth / 2)-yourname.width/2, windowHeight/2);

  write = createP("write your name here");
  write.position(yourname.x- yourname.width/4, windowHeight/2-100);
  write.style("color:white; font-size:25px;");

  //submit
  button = createButton('submit');
  button.position(yourname.x + yourname.width +20, windowHeight/2);
  button.mousePressed(name);


}

function draw() {

}

function name(){

  //creating new paragraph
  howareyou = createP("Hi "+ yourname.value()+", how are you?");
  howareyou.position(write.x, windowHeight/2-100);
  howareyou.style("color:white; font-size:25px;");

  //hiding previous input and button
  yourname.hide();
  write.hide();
  button.hide();

  //emoticons
  happy = createImg('./assets/happy.png');
  happy.position(windowWidth/2-200, windowHeight/2);
  happy.mousePressed(next_happy);

  soso= createImg('./assets/soso.png');
  soso.position(windowWidth/2-60, windowHeight/2);
  soso.mousePressed(next_soso);

  sad = createImg('./assets/sad.png');
  sad.position(windowWidth/2+80, windowHeight/2);
  sad.mousePressed(next_sad);
}

function next_happy(){

  window.open("Happy.html", "_self");

}

function next_soso(){

  window.open("Soso.html", "_self");

}

function next_sad(){

  window.open("Sad.html", "_self");

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('black');
}
