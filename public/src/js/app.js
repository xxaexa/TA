window.onscroll = () => {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;
  const wa = document.getElementById("wa");

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

$(".wrapButton #variasi").each(function () {
  const $this = $(this),
    harga = $this.data("harga");
  $this.on("click", function () {
    $("#wrapharga").removeClass("hidden");
    $("#harga").val(harga);
    $("#harga").attr("value", harga);
  });
});
