
const intitialDeviceHeight = ( document.body.clientHeight > 0) ? document.body.clientHeight : screen.height;
const intitialDeviceWidth  = (window.innerWidth > 0) ? window.innerWidth : screen.width;

export  {intitialDeviceWidth, intitialDeviceHeight}