const htmlElement = document.querySelector('html');
const toggleButtonM = document.querySelector('#toggleDarkMode-mobile');
const toggleButtonD = document.querySelector('#toggleDarkMode-desktop');
const moonSun = document.querySelector('#moon-sun');

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    moonSun.classList.add('theme-toggle--toggled');
    toggleButtonD.classList.add('theme-toggle--toggled');
  } else {
    document.documentElement.classList.remove('dark');
    moonSun.classList.remove('theme-toggle--toggled');
    toggleButtonD.classList.remove('theme-toggle--toggled');
  }

  localStorage.theme = 'light'

  localStorage.theme = 'dark'

  localStorage.removeItem('theme')

const toggleDarkMode = () => {
    htmlElement.classList.toggle("dark");
    moonSun.classList.toggle("theme-toggle--toggled");
    toggleButtonD.classList.toggle("theme-toggle--toggled");
};

toggleButtonM.addEventListener('click', toggleDarkMode);
toggleButtonD.addEventListener('click', toggleDarkMode);