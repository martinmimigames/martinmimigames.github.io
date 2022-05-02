function darkModeCheck() {
  // check if media-query supported
  if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
  }
  return false;
}

function setDarkModeCallback(callback) {
  // check if media-query supported
  if (window.matchMedia) {
    // set callback
    window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', callback);
  }
}