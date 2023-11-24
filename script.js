console.log('hello')

window.onmousemove = e => {
  //const colors = ['#74a7fe', '#53d5fd', '#b18cfe']
  const dot = document.createElement('i');
  dot.className = 'dot fa-solid fa-star';
  dot.style.color = `#53d5fd`;
  dot.style.left = `${e.pageX}`;
  dot.style.top = `${e.pageY}`;
  document.body.appendChild(dot);
  setTimeout(() => document.body.removeChild(dot), 1500);
}