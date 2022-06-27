let menuOpen = document.getElementById("menuClick");

menuOpen.addEventListener("click", toggleMenu);
function toggleMenu() {
  let changeBars = document.querySelector(".toggle-bars").classList.toggle("change");
  let menuContent = document.getElementById("menu-content");
  if (menuContent.style.display === "block") {
    menuContent.style.display = "none";
  } else {
    menuContent.style.display = "block";
  }
}

// For Hamburger behaviour
