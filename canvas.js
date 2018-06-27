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


// c.lineTo(120, 250);
// c.lineTo(150,280);