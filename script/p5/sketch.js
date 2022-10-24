var canva;

function setup() {
  canva = createCanvas(windowWidth, windowHeight);
  canva.parent('scriptcanva');

}

function draw() {
  clear();

/*  for(var x=10; x<windowWidth; x+=50){
    for(var y=10; y<windowHeight; y+=50){
  ellipse(x,y, 15, 15);
  fill(255, 0, 47);
  strokeWeight(0);
}
}*/
 ellipse(mouseX, mouseY, 20, 20);
 fill(0);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
