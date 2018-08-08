
let width, height;

function createRectangle(time) {
  let timeEl = time;
  const rectangle = document.createElement('div');
  rectangle.className = 'rectangle';
  let widthElement = Math.round(Math.random() * 200 + 50);
  rectangle.style.width = `${widthElement}px`;
  let heightElement = Math.round(Math.random() * 200 + 50);
  rectangle.style.height = `${heightElement}px`;
  let topPosition = Math.round(Math.random() * (width - widthElement));
  rectangle.style.top = `${topPosition}px`;
  let leftPosition = Math.round(Math.random() * (height - heightElement));
  rectangle.style.left = `${leftPosition}px`;
  let x = Math.round(Math.random() * (width - widthElement) - widthElement);
  let y = Math.round(Math.random() * (height - heightElement) - heightElement);
  rectangle.style.transform = `translate3d(${x}px,${y}px,0)`;
  const rectangleDiv = document.querySelector('.rectangle-div');
  rectangleDiv.appendChild(rectangle);
  let actualPositionX = leftPosition + x*(timeEl/50);
  let actualPositionY = topPosition + y*(timeEl/50);
  setTimeout(() => animateRectangle(
    rectangle, 
    widthElement, 
    heightElement,
    actualPositionX,
    actualPositionY, 
    timeEl
  ), timeEl / 5);
}
function animateRectangle(
  rectangle, 
  widthElement, 
  heightElement,
  actualPositionX,
  actualPositionY, 
  time
) {
  let startPositionX = actualPositionX;
  let startPositionY = actualPositionY;
  let timeEl = time;
  let x = Math.round(Math.random() * (width - widthElement) - widthElement);
  let y = Math.round(Math.random() * (height - heightElement) - heightElement);
  rectangle.style.transform = `translate3d(${x}px,${y}px,0)`;
  rectangle.style.opacity = 1;
  let actualPosX = startPositionX + x*(timeEl/50);
  let actualPosY = startPositionY + y*(timeEl/50);
  setTimeout(() => animateRectangle(rectangle, x, y, actualPosX, actualPosY, timeEl), timeEl);
}
export default function init() {
  height = window.innerHeight;
  width = window.innerWidth;
  for (let i = 0; i < 50; i++) {
    let time = Math.round(Math.random() * 40000 + 10000);
    createRectangle(time);
  }
}