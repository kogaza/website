var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var motX = -300;
var motY = 100;
var speed = 3;

var moto = canvas.getContext('2d');
var radiusCircle = [55, 30, 10, 1, 55, 45, 33, 25, 10, 1];

function motorbike() {
  requestAnimationFrame(motorbike);

  moto.clearRect(0, 0, innerWidth, innerHeight);

  //wheels
  for (var i = 0; i < radiusCircle.length; i++) {
    moto.beginPath();
    i % 2 == 0 ? ((i == 2 || i == 6 || i == 8) ? moto.fillStyle = "rgb(200, 200, 200)" : moto.fillStyle = "black") : moto.fillStyle = "white";
    i < 4 ? widthPosition = motX : widthPosition = motX + 290;
    moto.arc(widthPosition, motY + 200, radiusCircle[i], 0, Math.PI * 2, false);
    moto.fill();
    moto.stroke();
  }
  //chassis
  moto.beginPath();
  moto.strokeStyle = "gray";
  moto.fillStyle = 'rgb(70, 70, 70)';
  //bak
  moto.moveTo(motX + 230, motY + 110);
  moto.bezierCurveTo(motX + 210, motY + 90, motX + 120, motY + 100, motX + 110, motY + 120);
  moto.moveTo(motX + 230, motY + 110);
  moto.bezierCurveTo(motX + 210, motY + 170, motX + 120, motY + 140, motX + 110, motY + 120);
  moto.fill();
  //tył
  moto.bezierCurveTo(motX + 120, motY + 150, motX + 40, motY + 130, motX + 40, motY + 120);
  moto.bezierCurveTo(motX + 40, motY + 100, motX - 50, motY + 110, motX - 50, motY + 125);
  moto.bezierCurveTo(motX - 45, motY + 120, motX + 10, motY + 120, motX + 45, motY + 155);
  moto.lineTo(motX + 45, motY + 160);
  moto.lineTo(motX + 40, motY + 160);
  //nadkole tył
  moto.bezierCurveTo(motX + 35, motY + 150, motX + 10, motY + 140, motX + 5, motY + 143);
  //dół
  moto.lineTo(motX + 40, motY + 188);
  moto.moveTo(motX - 5, 295);
  moto.lineTo(motX + 80, motY + 180);
  moto.moveTo(motX - 5, 295);
  moto.lineTo(motX - 5, motY + 205);
  moto.lineTo(motX + 80, motY + 220);
  moto.lineTo(motX + 82, motY + 225);
  moto.lineTo(motX + 230, motY + 225);
  //przód łuk
  moto.bezierCurveTo(motX + 210, motY + 200, motX + 230, motY + 150, motX + 250, motY + 140);
  //amortyzator przód
  moto.lineTo(motX + 285, motY + 207);
  moto.lineTo(motX + 298, motY + 200);
  moto.lineTo(motX + 265, motY + 132);
  //szyba
  moto.bezierCurveTo(motX + 265, motY + 132, motX + 280, motY + 120, motX + 310, motY + 130);
  moto.bezierCurveTo(motX + 350, motY + 140, motX + 240, motY + 10, motX + 220, motY + 20);
  moto.bezierCurveTo(motX + 350, motY + 140, motX + 260, motY + 100, motX + 270, motY + 100);
  moto.bezierCurveTo(motX + 250, motY + 90, motX + 230, motY + 100, motX + 230, motY + 110);
  //błotnik przód
  moto.moveTo(motX + 295, 295);
  moto.bezierCurveTo(motX + 290, motY + 170, motX + 280, motY + 160, motX + 310, motY + 145);
  moto.bezierCurveTo(motX + 310, motY + 145, motX + 300, motY + 140, motX + 270, motY + 145);
  moto.fill();
  moto.stroke();

  motX > innerWidth-400 ? speed = 0 : speed;
  motX += speed;
}

var ball = canvas.getContext('2d');
var ballX = 100;
var ballY = 600;
function ballAnimation() {
  requestAnimationFrame(ballAnimation);
  console.log('działa');
  ball.beginPath();
  ball.arc(ballX, ballY, 20, 0, Math.PI * 2, false);
  ball.stroke();

  ballX += 3;
  
}

motorbike();
ballAnimation();







