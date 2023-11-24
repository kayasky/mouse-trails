const colors = ['#74a7fe', '#53d5fd', '#b18cfe'];
const animationClasses = ['dot-1', 'dot-2', 'dot-3'];
let prevX = 0;
let prevY = 0;

function calculateDistance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

function createDot(e, colors) {
  const dot = document.createElement('i');
  const animationClass = getRandomItem(animationClasses);
  dot.className = `dot fa-solid fa-star fall ${animationClass}`;
  dot.style.color = getRandomItem(colors);
  dot.style.left = `${e.pageX}`;
  dot.style.top = `${e.pageY}`;
  prevX = e.pageX;
  prevY = e.pageY;
  return dot;
}

function createMouseTrail(e) {
  const trail = document.createElement('div');
  trail.className = 'trail';
  trail.style.left = `${e.pageX}`;
  trail.style.top = `${e.pageY}`;
  return trail;
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function removeElement(dot, timeout) {
  setTimeout(() => document.body.removeChild(dot), timeout);
}

window.onmousemove = e => {
  const distance = calculateDistance(prevX, prevY, e.pageX, e.pageY);
  const trail = createMouseTrail(e);
  document.body.appendChild(trail);
  removeElement(trail, 200);
  
  if (distance < 50) return;
  const dot = createDot(e, colors);
  document.body.appendChild(dot);
  removeElement(dot, 1500);
}