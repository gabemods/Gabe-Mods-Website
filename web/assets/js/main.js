const menuButtonContainer = document.getElementById('menu-button');
const menuButton = menuButtonContainer.querySelector('md-icon');
const menuContainer = document.querySelector('.menu-container');
const settingsButton = document.getElementById('settings-button');
const settingsMenu = document.getElementById('settings-menu');
const themeSelect = document.getElementById('theme');

document.getElementById('current-year').textContent = new Date().getFullYear();

menuButtonContainer.addEventListener('click', function() {
  if (menuButton.textContent.trim() === 'menu') {
    menuButton.textContent = 'close';
    menuContainer.style.transform = 'translateX(0)';
  } else {
    menuButton.textContent = 'menu';
    menuContainer.style.transform = 'translateX(-100%)';
  }
});

settingsButton.addEventListener('click', async () => {
  await settingsMenu.show();
});

function applyTheme(theme) {
  if (theme === 'system') {
    document.documentElement.removeAttribute('data-theme');
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    mq.onchange = (e) => {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    };
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

function getPreferredTheme() {
  let theme = localStorage.getItem('theme');
  if (!theme) {
    localStorage.setItem('theme', 'system');
    theme = 'system';
  }
  return theme;
}

themeSelect.value = getPreferredTheme();
applyTheme(themeSelect.value);

themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;
  localStorage.setItem('theme', selectedTheme);
  applyTheme(selectedTheme);
});