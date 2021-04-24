let ticking = false;

function setRandomBackgroundColour() {
    document.querySelector('.layout-main').style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);}

document.addEventListener('wheel', function(e) {
  if (!ticking) {
    window.requestAnimationFrame(function() {
        setTimeout(function () {
            setRandomBackgroundColour();
            ticking = false;
        }, 500)
    });

    ticking = true;
  }
});