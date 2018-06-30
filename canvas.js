var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var motX = -300;
// var wheelX = 400;
var motY = 100;
// var wheelY = 400;
var ballX = 50;
var ballY = 50;
var speed = 3;

var context = canvas.getContext('2d');
var radiusCircle = [53, 30, 10, 1, 53, 45, 33, 25, 10, 1];

function Ball(x, y, ballX, ballY, alfa) {
  this.x = x;
  this.y = y;
  this.ballX = ballX;
  this.ballY = ballY;
  this.alfa = alfa;
  
  this.draw = function() {
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.arc(this.x + this.ballX*Math.cos(Math.PI/36 * this.alfa), 
                this.y + this.ballY*Math.sin(Math.PI/36 * this.alfa),
                5, 0, Math.PI * 2, false);
    context.fill();
    context.stroke();
  }

  this.update = function() {
    this.alfa += 0.2;
    this.x += speed;
    this.draw();
  }
}
var wheelsArray = [];

function wheel(posX,posY) {
  wheelsArray = [];
  var numberOfPoint = 48;
  // console.log(position);
  
  for(var i = 0; i < numberOfPoint; i++) {
    var alfaP = Math.PI - 360/numberOfPoint*(4-i);
    wheelsArray.push(new Ball(posX-5,posY,ballX+2,ballY+2,alfaP));
  }

  motorbike();

}

function motorbike() {
  requestAnimationFrame(motorbike);
  
  context.clearRect(0, 0, innerWidth, innerHeight);
  
  for(var i = 0; i < wheelsArray.length; i++){
    wheelsArray[i].update();
  }
  //wheels
  for (var i = 0; i < radiusCircle.length; i++) {
    context.beginPath();
    i % 2 == 0 ? ((i == 2 || i == 6 || i == 8) ? context.fillStyle = "rgb(200, 200, 200)" : context.fillStyle = "black") : context.fillStyle = "white";
    i < 4 ? widthPosition = motX : widthPosition = motX + 290;
    context.arc(widthPosition, motY + 200, radiusCircle[i], 0, Math.PI * 2, false);
    context.fill();
    context.stroke();
    
  }
  //chassis
  context.beginPath();
  context.strokeStyle = "gray";
  context.fillStyle = 'rgb(70, 70, 70)';
  //bak
  context.moveTo(motX + 230, motY + 110);
  context.bezierCurveTo(motX + 210, motY + 90, motX + 120, motY + 100, motX + 110, motY + 120);
  context.moveTo(motX + 230, motY + 110);
  context.bezierCurveTo(motX + 210, motY + 170, motX + 120, motY + 140, motX + 110, motY + 120);
  context.fill();
  //tył
  context.bezierCurveTo(motX + 120, motY + 150, motX + 40, motY + 130, motX + 40, motY + 120);
  context.bezierCurveTo(motX + 40, motY + 100, motX - 50, motY + 110, motX - 50, motY + 125);
  context.bezierCurveTo(motX - 45, motY + 120, motX + 10, motY + 120, motX + 45, motY + 155);
  context.lineTo(motX + 45, motY + 160);
  context.lineTo(motX + 40, motY + 160);
  //nadkole tył
  context.bezierCurveTo(motX + 35, motY + 150, motX + 10, motY + 140, motX + 5, motY + 143);
  //dół
  context.lineTo(motX + 40, motY + 188);
  context.moveTo(motX - 5, 295);
  context.lineTo(motX + 80, motY + 180);
  context.moveTo(motX - 5, 295);
  context.lineTo(motX - 5, motY + 205);
  context.lineTo(motX + 80, motY + 220);
  context.lineTo(motX + 82, motY + 225);
  context.lineTo(motX + 230, motY + 225);
  //przód łuk
  context.bezierCurveTo(motX + 210, motY + 200, motX + 230, motY + 150, motX + 250, motY + 140);
  //amortyzator przód
  context.lineTo(motX + 285, motY + 207);
  context.lineTo(motX + 298, motY + 200);
  context.lineTo(motX + 265, motY + 132);
  //szyba
  context.bezierCurveTo(motX + 265, motY + 132, motX + 280, motY + 120, motX + 310, motY + 130);
  context.bezierCurveTo(motX + 350, motY + 140, motX + 240, motY + 10, motX + 220, motY + 20);
  context.bezierCurveTo(motX + 350, motY + 140, motX + 260, motY + 100, motX + 270, motY + 100);
  context.bezierCurveTo(motX + 250, motY + 90, motX + 230, motY + 100, motX + 230, motY + 110);
  //błotnik przód
  context.moveTo(motX + 295, 295);
  context.bezierCurveTo(motX + 290, motY + 170, motX + 280, motY + 160, motX + 310, motY + 145);
  context.bezierCurveTo(motX + 310, motY + 145, motX + 300, motY + 140, motX + 270, motY + 145);
  context.fill();
  context.stroke();
  
  
  motX > innerWidth-400 ? speed = 0 : speed;
  motX += speed;

}

wheel(500,500);









