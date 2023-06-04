var count = 0;
document.onscroll = function (e) {
  // console.log(e.target.scrollingElement.scrollTop);
  if (e.target.scrollingElement.scrollTop > 40) {
    navElement.style.height = '2.5rem';
    navElement.style.background = '#ffffff';
  } else {
    navElement.style.background = '';
    navElement.style.height = '5rem';
  }
  if (e.target.scrollingElement.scrollTop == 0) {
    count += 1;
    logo.style.transform = 'rotate(' + count * 360 + 'deg)';
    console.log(e.target.scrollingElement.scrollTop);
  }
};

var navElement = document.getElementById('navbar');
var logo = document.getElementById('logo');
