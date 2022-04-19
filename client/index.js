console.log("legal seva");
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("fixed-top", window.scrollY > 0);
  nav.classList.toggle("bg-dark", window.scrollY > 0);
  nav.classList.toggle("navbar-dark", window.scrollY > 0);
});

// //javascript for responsive navigation sidebar menu
// var menu = document.querySelector(".menu");
// var menuBtn = document.querySelector(".menu-btn");
// var closeBtn = document.querySelector(".close-btn");

// menuBtn.addEventListener("click", () => {
//   menu.classList.add("active");
//   window.addEventListener("scroll", function () {
//     var header = document.querySelector("header");
//     header.style.background.toggle("blue", window.scrollY > 0);
//     // header.style.background = blue;
//   });
// });

// closeBtn.addEventListener("click", () => {
//   menu.classList.remove("active");
// });
