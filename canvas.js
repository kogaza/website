var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var motX = -300;
var speed = 5;

//wheels
var moto = canvas.getContext('2d');
var radiusCircle = [55, 30, 10, 1, 55, 45, 33, 25, 10, 1];


function motobike() {
  requestAnimationFrame(motobike);

  moto.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < radiusCircle.length; i++) {
    moto.beginPath();
    i % 2 == 0 ? ((i == 2 || i == 6 || i == 8) ? moto.fillStyle = "rgb(200, 200, 200)" : moto.fillStyle = "black") : moto.fillStyle = "white";
    i < 4 ? widthPosition = motX : widthPosition = motX + 290;
    moto.arc(widthPosition, 300, radiusCircle[i], 0, Math.PI * 2, false);
    moto.fill();
    moto.stroke();
  }
  //chassis
  moto.beginPath();
  moto.strokeStyle = "gray";
  moto.fillStyle = 'rgb(70, 70, 70)';
  moto.moveTo(motX + 230, 210);
  moto.bezierCurveTo(motX + 210, 190, motX + 120, 200, motX + 110, 220);
  moto.moveTo(motX + 230, 210);
  moto.bezierCurveTo(motX + 210, 270, motX + 120, 240, motX + 110, 220);
  moto.fill();
  moto.bezierCurveTo(motX + 120, 250, motX + 40, 230, motX + 40, 220);
  moto.bezierCurveTo(motX + 40, 200, motX - 50, 210, motX - 50, 225);
  moto.bezierCurveTo(motX - 45, 220, motX + 10, 220, motX + 45, 255);
  moto.lineTo(motX + 45, 260);
  moto.lineTo(motX + 40, 260);
  moto.bezierCurveTo(motX + 35, 250, motX + 10, 240, motX + 5, 243);
  moto.lineTo(motX + 40, 288);
  moto.moveTo(motX - 5, 295);
  moto.lineTo(motX + 80, 280);
  moto.moveTo(motX - 5, 295);
  moto.lineTo(motX - 5, 305);
  moto.lineTo(motX + 80, 320);
  moto.lineTo(motX + 82, 325);
  moto.lineTo(motX + 230, 325);
  moto.bezierCurveTo(motX + 210, 300, motX + 230, 250, motX + 250, 240);
  moto.lineTo(motX + 285, 307);
  moto.lineTo(motX + 298, 300);
  moto.lineTo(motX + 265, 232);
  moto.bezierCurveTo(motX + 265, 232, motX + 280, 220, motX + 310, 230);
  moto.bezierCurveTo(motX + 350, 240, motX + 240, 110, motX + 220, 120);
  moto.bezierCurveTo(motX + 350, 240, motX + 260, 200, motX + 270, 200);
  moto.bezierCurveTo(motX + 250, 190, motX + 230, 200, motX + 230, 210);
  moto.moveTo(motX + 295, 295);
  moto.bezierCurveTo(motX + 290, 270, motX + 280, 260, motX + 310, 245);
  moto.bezierCurveTo(motX + 310, 245, motX + 300, 240, motX + 270, 245);
  moto.fill();
  moto.stroke();

  motX += 1;
}

motobike();







