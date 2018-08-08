
let width, height;

function createRectangle(time) {
  let timeEl = time;
  const rectangle = document.createElement('div');
  rectangle.className = 'rectangle';
  let widthElement = Math.round(Math.random() * 200 + 50);
  rectangle.style.width = `${widthElement}px`;
  let heightElement = Math.round(Math.random() * 200 + 50);
  rectangle.style.height = `${heightElement}px`;
  let topPosition = Math.round(Math.random() * (width-widthElement));
  rectangle.style.top = `${topPosition}px`;
  let left = Math.round(Math.random() * (height-heightElement));
  rectangle.style.left = `${left}px`;
  let x = Math.round(Math.random() * (width-widthElement));
  let y = Math.round(Math.random() * (height-heightElement));
  rectangle.style.transform = `translate3d(${x}px,${y}px,0)`;
  const rectangleDiv = document.querySelector('.rectangle-div');
  rectangleDiv.appendChild(rectangle);
  setTimeout(() => animateRectangle(rectangle, widthElement, heightElement, timeEl), timeEl / 5);
}
function animateRectangle(rectangle, widthElement, heightElement, time) {
  let timeEl = time;
  let x = Math.round(Math.random() * (width-widthElement));
  let y = Math.round(Math.random() * (height-heightElement));
  rectangle.style.transform = `translate3d(${x}px,${y}px,0)`;
  rectangle.style.opacity = 1;
  setTimeout(() => animateRectangle(rectangle, x, y, timeEl), timeEl);
}
export default function init() {
  width = window.innerWidth;
  height = window.innerHeight;
  for (let i = 0; i < 50; i++) {
    let time = Math.round(Math.random() * 40000 + 10000);
    createRectangle(time);
  }
}