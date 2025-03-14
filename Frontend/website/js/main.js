/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
  


  const texts = ["Cloud Computing", "Data Analyst"];
let index = 0;

setInterval(() => {
    document.getElementById("animated-text").textContent = texts[index];
    index = (index + 1) % texts.length;
}, 1500);


// Scroll top button

document.addEventListener("DOMContentLoaded", function () {
  let scrollTop = document.getElementById("scroll-top");

  function toggleScrollTop() {
      if (window.scrollY > 100) {
          scrollTop.style.display = "flex"; // Aparece cuando bajas
      } else {
          scrollTop.style.display = "none"; // Desaparece cuando estás arriba
      }
  }

  scrollTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });

  window.addEventListener("scroll", toggleScrollTop);
});

