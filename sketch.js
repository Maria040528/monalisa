function setup() {
  createCanvas(400, 400);
}
let olhox;


function draw() {
    background('rgb(68,180,67)');
    fill(`rgb(19,190,19)`)
    circle(200, 200, 300);
  fill(`white`)
  circle(202, 180, 60,)
  fill(`green`)
    circle(199,177,10)// pupila direita
    // circle(150, 150, 10); // pupila direita
    triangle(138,66,85,106,48,35);
    triangle(269,68,331,125,362,49);
    line(156,248,241,250)
  
    olhox= map(mouseX, 0, 400);
  
    circle(olhox,18); // nova pupila esquerda 
    if(mouselsPressed) {
       console.log(mousex);
  }
}
