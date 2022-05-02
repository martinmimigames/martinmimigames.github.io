function isMobile() {
  return /Mobi/i.test(window.navigator.userAgent);;
}

function addCss(res) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = res;
  document.getElementsByTagName('HEAD')[0].appendChild(link);
}