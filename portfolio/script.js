// Optional animations or smooth hover effects
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#ffd600';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = 'white';
  });
});
