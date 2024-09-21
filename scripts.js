let mobile_menu = document.getElementById("mobile_menu");
let main_menu = document.getElementById("main_menu");

mobile_menu.addEventListener("click", () => {
  main_menu.classList.toggle("hidden");
});
