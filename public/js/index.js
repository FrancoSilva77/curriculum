document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  navegacionResponsive();
  scrollNav();
}

function navegacionResponsive() {
  const botonMenu = document.querySelector(".header__toggle");
  const links = document.querySelector(".nav");

  botonMenu.addEventListener("click", mostrarMenu);

  function mostrarMenu() {
    // if (links.classList.contains("show-links")) {
    //   links.classList.remove("show-links");
    // } else {
    //   links.classList.add("show-links");
    // }

    links.classList.toggle("show__nav");
  }
}

function scrollNav() {
  const enlaces = document.querySelectorAll(".nav");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();

      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
}
