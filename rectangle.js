function createRectangle() {
  const rectangle = document.createElement('div');
  rectangle.className = 'rectangle';
  let width = window.innerWidth;
  const footer = document.querySelector('footer');
  let height = footer.getBoundingClientRect();
  let x = Math.round(Math.random()*width);
  let y = Math.round(Math.random()*height.top);
  rectangle.style.transform = `translate3d(${x}px,${y}px,0)`
  document.body.appendChild(rectangle);
  setTimeout(() => animateRectangle(rectangle),1000);
}
function animateRectangle(rectangle) {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let x = Math.round(Math.random()*width)-250;
  let y = Math.round(Math.random()*height)-150;
  rectangle.style.transform = `translate3d(${x}px,${y}px,0)`;
  rectangle.style.opacity = 1;
  setTimeout(() => animateRectangle(rectangle,x,y),100000);
}
export default function init() {
  for(let i = 0; i < 50; i++){
    createRectangle();
  } 
}