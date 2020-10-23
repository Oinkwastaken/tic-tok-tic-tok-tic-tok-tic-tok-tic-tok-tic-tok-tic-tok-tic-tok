var hr
var mn
var sec
var hrangle
var mnangle
var secangle
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}

function draw() {
  background(255,255,255);  
  translate(200,200)
  rotate(-90)
  hr = hour()
  hrAngle = map(hr, 0, 60, 0,360)
  push()
  rotate(hrAngle)
  stroke(0,255,0)
  strokeWeight(8)
  line(0,0,50,0)
  pop()
  mn = minute()
  mnAngle = map(mn, 0, 60, 0,360)
  push()
  rotate(mnAngle)
  stroke(255,0,0)
  strokeWeight(8)
  line(0,0,75,0)
  pop()
  sec = second()
  secAngle = map(sec, 0, 60, 0,360)
  push()
  rotate(secAngle)
  stroke(0,0,255)
  strokeWeight(8)
  line(0,0,100,0)
  pop()
  drawSprites();
}
