(() => {
  'use strict'
  const setTheme = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
  setTheme('light');
})()
