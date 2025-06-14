const menuButtonContainer = document.getElementById('menu-button');
const menuButton = menuButtonContainer.querySelector('md-icon');
const menuContainer = document.querySelector('.menu-container');

menuButtonContainer.addEventListener('click', function() {
  if (menuButton.textContent.trim() === 'menu') {
    menuButton.textContent = 'close';
    menuContainer.style.transform = 'translateX(0)';
  } else {
    menuButton.textContent = 'menu';
    menuContainer.style.transform = 'translateX(-100%)';
  }
});

document.getElementById('current-year').textContent = new Date().getFullYear();