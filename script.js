/*PARALLAX*/

let parallax = document.querySelector('.parallax');

window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.backgroundPositionY = scrollTop * 0.7 + 'px';
}

/*ANIM TEXTE SCROLL*/ 

function checkForVisibility() {
  var effet = document.querySelectorAll(".effet");
  effet.forEach(function(effet) {
    if (isElementInViewport(effet)) {
      effet.classList.add("effetVisible");
    } else {
      effet.classList.remove("effetVisible");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}