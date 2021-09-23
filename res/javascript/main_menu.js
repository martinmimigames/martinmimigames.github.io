// Check to see if Media-Queries are supported
var _mediaQuerySupported = window.matchMedia;
var _mediaQuerySupported;
if (window.matchMedia){
    _mediaQuerySupported = true;
}else {
    _mediaQuerySupported = false;
}

function darkModeCheck(){

    if (_mediaQuerySupported) {
      // Check if the dark-mode Media-Query matches
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        return true;
      }
    }
    return false;
}