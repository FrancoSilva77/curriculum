(function () {
  const botonMenu = document.querySelector(".header__toggle");
  const links = document.querySelector(".nav");

  botonMenu.addEventListener("click", mostrarMenu);

  function mostrarMenu() {
    // if (links.classList.contains("show-links")) {
    //   links.classList.remove("show-links");
    // } else {
    //   links.classList.add("show-links");
    // }

    links.classList.toggle("show__nav")
  }
})();
