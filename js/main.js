// --------change background of navebar when scroll
$(window).scroll(function () {
  var sss = document.getElementById("header");
  if ($(window).scrollTop() > 100) {
    sss.classList.add("header-fixed");
  } else {
    sss.classList.remove("header-fixed");
  }
});

//--------change the color of navbare and add icon of top --------
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".content .arow").fadeIn();
  } else {
    $(".content .arow").fadeOut();
  }
});

let top2 = $("#arow");
top2.click(function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// --------counter ---------

let counters = document.querySelectorAll(".counter");
const speed = 100;
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = (count + inc) | 0;
      setTimeout(updateCount, 7);
    } else {
      count.innerText = target;
    }
  };
  setTimeout(updateCount, 1000);
});
//------------------------

// -----------menu----------------
$(document).ready(function () {
  $(".memo .navbar-nav .nav-item .nav-link").click(function () {
    $(".memo").slideToggle(600, function () {});
  });

  $(".menuu i .logo").click(function () {
    $(".memo").slideToggle(600, function () {});
  });
});

// --------------------------

// ---------about section-----------

$(".about-content-text .h1").slideDown(1000, function () {
  $(".about-content-text .h4-bold").slideDown(1000, function () {
    $(".about-content-text .h3").fadeIn(2000, function () {
      $(".about-content-text .p1").slideDown(2000, function () {
        $(".about-content-text .p2").slideDown(2000);
      });
    });
  });
});

//------------------------
// --------------funny text-----------------
$(".funtext").funnyText({
  speed: 300,
  direction: "both",
});

$(".funtext2").funnyText({
  speed: 300,
  direction: "both",
});

$(".funtext3").funnyText({
  speed: 500,
  direction: "both",
});
// ----------------
// wow js plugens
new WOW().init();

// owlCarousel
$(".owl-carousel").owlCarousel({
  items: 4,
  loop: false,
  center: true,
  margin: 10,
  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: "URLHash",
});

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900,
});

//**auto type script**//

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  loop: true,
  typeSpeed: 40,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 1000,
});
