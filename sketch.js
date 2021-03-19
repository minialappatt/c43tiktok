function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  translate(180,190);
  rotate(-90);

  var hr = hour();
  var mn = minute();
  var sc = second();


  strokeWeight(8);
  noFill();
  stroke("red");
  var s1 = map(sc,0,60,0,360)
  arc(0,0,296,296,0,s1);

  stroke(102, 255, 51);
  var m2 = map(mn,0,60,0,360)
  arc(0,0,275,275,0,m2);

  stroke("darkblue");
  var h3 = map(hr % 12,0,12,0,360)
  arc(0,0,250,250,0,h3);
  
  push();
  rotate(s1);
  stroke("red");
  line(0,0,100,0);
  pop();
  
  push();
  rotate(m2);
  stroke(102, 255, 51);
  line(0,0,72,0);
  pop();
  
  push();
  rotate(h3);
  stroke("darkblue");
  line(0,0,53,0);
  pop();

  stroke(255);
  point(0,0);
}