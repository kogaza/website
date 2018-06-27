var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(234,34,3,0.5)';
// c.fillRect(100,100, 200, 200);

//line

// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(500,600);
// c.strokeStyle = "red";
// c.stroke();

//Arc / Circle

// c.beginPath();
// c.arc(200, 200, 50, 80, 0, true);
// c.strokeStyle = 'blue';
// c.stroke();

//wheels
var radiusCircle = [55, 30, 10, 1, 55, 45, 33, 25, 10, 1];
for(var i = 0; i < radiusCircle.length; i++) {
  c.beginPath();
  i % 2 == 0 ? ((i == 2 || i == 6 || i == 8) ? c.fillStyle = "rgb(200, 200, 200)" : c.fillStyle = "black" ): c.fillStyle = "white";
  i < 4 ? widthPosition = 100 : widthPosition = 420;
  c.arc(widthPosition, 300, radiusCircle[i], 0, Math.PI * 2, false);
  c.fill();
  c.stroke();
}

c.beginPath();
c.strokeStyle = "red";
c.moveTo(140, 220);
c.bezierCurveTo(140, 200, 50, 210, 50, 225);
c.bezierCurveTo(55, 220, 110, 220, 145, 255);
c.lineTo(145, 260);
c.lineTo(140, 260);
c.bezierCurveTo(135, 250, 110, 240, 105, 243);
c.lineTo(140, 288);
c.moveTo(95, 295);
c.lineTo(180, 280);
c.moveTo(95, 295);
c.lineTo(95, 305);
c.moveTo(95, 305);
c.lineTo(180, 320);
c.lineTo(182, 325);
c.lineTo(360, 325);
c.bezierCurveTo(340, 300, 360, 250, 380, 240);
c.lineTo(415, 307);
c.lineTo(428, 300);
c.lineTo(395, 232);
c.bezierCurveTo(395, 232, 410, 220, 440, 230);
c.bezierCurveTo(480, 240, 370, 110, 350, 120);
c.bezierCurveTo(480, 240, 400, 200, 400, 200);
c.stroke();


// c.lineTo(120, 250);
// c.lineTo(150,280);