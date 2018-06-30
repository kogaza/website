var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var motX = -300;
var motY = 100;
var wheelX = 50;
var wheelY = 50;
var speed = 3;
var speedWheel = 0.2;
var brake = innerWidth - 400;

var context = canvas.getContext('2d');
var radiusCircle = [53, 30, 10, 1, 53, 45, 33, 25, 10, 1];

function Wheel(x, y, wheelX, wheelY, alfa) {
  this.x = x;
  this.y = y;
  this.wheelX = wheelX;
  this.wheelY = wheelY;
  this.alfa = alfa;

  this.draw = function () {
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.arc(this.x + this.wheelX * Math.cos(Math.PI / 36 * this.alfa),
      this.y + this.wheelY * Math.sin(Math.PI / 36 * this.alfa),
      5, 0, Math.PI * 2, false);
    context.fill();
    context.stroke();
  }

  this.update = function () {
    this.alfa += speedWheel;
    this.x += speed;
    motX > brake ? speedWheel = 0 : speedWheel;
    this.draw();
  }
}
var wheelsArray1 = [];
var wheelsArray2 = [];

function wheel() {
  wheelsArray1 = [];
  wheelsArray2 = [];
  var numberOfPoint = 48;

  for (var i = 0; i < numberOfPoint; i++) {
    var alfaP = Math.PI - 360 / numberOfPoint * (4 - i);
    wheelsArray1.push(new Wheel(motX + 290 - 4, motY + 200, wheelX + 2, wheelY + 2, alfaP));
    wheelsArray2.push(new Wheel(motX - 4, motY + 200, wheelX + 2, wheelY + 2, alfaP));
  }
  motorbike();
}

function motorbike() {
  requestAnimationFrame(motorbike);

  context.clearRect(0, 0, innerWidth, innerHeight);

  //rotate wheels
  for (var i = 0; i < wheelsArray1.length; i++) {
    wheelsArray1[i].update(); //wheel.update
    wheelsArray2[i].update(); //wheel.update
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

  motX > brake ? speed = 0 : speed;
  motX += speed;
}
wheel();









