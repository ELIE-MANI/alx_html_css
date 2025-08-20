const menu = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  menu.style.display =
   menu.style.display === 'block' ? 'none' : 'block';
});