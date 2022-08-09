let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // scroll 위치에 대한 작업을 하세요
  var hello = document.querySelector(".changeback");
  hello.style.background = "white";
  hello.style.boxShadow = "0px 0px 10px";
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
