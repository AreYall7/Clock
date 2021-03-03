const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let ms = date.getMilliseconds();


let secPosition = (sec*6);
let minPosition = (min*6)+((sec*6)/60);
let hrPosition = (hr*360/12)+((min*6)/12);

setInterval(function () {

  hrPosition = hrPosition+(3/360);
  minPosition = minPosition+(1/10)
  secPosition = secPosition+6;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}, 1000);
