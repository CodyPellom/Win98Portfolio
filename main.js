/*Globals*/
let createDiv = document.createElement('div');

/*Button Definitions Start*/
let min = document.getElementById('min');
let min2 = document.getElementById('min2');
//
let max = document.getElementById('max');
let max2 = document.getElementById('max2');
//
let close = document.getElementById('close');
let close2 = document.getElementById('close2');
//
let windowId = document.getElementById('windowId');
let hiddenWindow = document.getElementById('hiddenWindow');
//
let taskbar = document.getElementById('taskbar');
let minButton = document.getElementById('minButton');
//
let aboutMeButton = document.getElementById('aboutMeButton');
/*Button Definitions End*/

/*Button Functions Start*/
let closeFunction = function () {
  close.addEventListener('click', function () {
    windowId.style.display = 'none';
  });
}
let closeFunction2 = function () {
  close2.addEventListener('click', function () {
    hiddenWindow.style.display = 'none';
  });
}
let minFunction = function () {
  min.addEventListener('click', function () {
    windowId.style.display = 'none';
    minButton.removeAttribute('id');
    minButton.setAttribute('class', 'maxButton');
  });
}
let minFunction2 = function () {
  min2.addEventListener('click', function () {
    hiddenWindow.style.display = 'none';
    minButton.removeAttribute('id');
    minButton.setAttribute('class', 'maxButton');
  });
}
let clickMin = function () {
  minButton.addEventListener('click', function () {
    minButton.removeAttribute('class');
    minButton.setAttribute('id', 'minButton');
    windowId.style.display = 'block';
  });

};

let clickMax = function () {
  max.addEventListener('click', function () {
    windowId.style.display = 'none';
    hiddenWindow.style.display = 'block';
  })
}
let aboutMeClicked = function () {
  aboutMeButton.addEventListener('click', function () {
    
  });
}
/*Init Functions Start*/
//
closeFunction();
closeFunction2();
minFunction();
minFunction2();
clickMin();
clickMax();
aboutMeClicked();
//
/*Init Functions End*/