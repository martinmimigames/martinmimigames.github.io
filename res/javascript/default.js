var _isMobile = /Mobi/i.test(window.navigator.userAgent);
// Check to see if Media-Queries are supported
var _mediaQuerySupported = window.matchMedia;

function darkModeCheck(){

    if (_mediaQuerySupported) {
      // Check if the dark-mode Media-Query matches
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        return true;
      }

    }
    return false;

}


function isMobile(){
       return _isMobile;
       }
function addCss(res) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = res;
        document.getElementsByTagName('HEAD')[0].appendChild(link);
}