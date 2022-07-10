// First Action:
// Open/Close Mobile Menu

// Get the menu toggle
let menuOpen = document.getElementById("menuClick");

// Action/Behaviour when menu togglebar is clicked
menuOpen.addEventListener("click", toggleMenu);
function toggleMenu() {
//    Get the toggle bar components and and let them adjust to a close btn. WHat happensto the bars when togglebar is cicked
  let changeBars = document.querySelector(".toggle-bars").classList.toggle("change");
//   Get the mobile menu content and display according to the conditions
  let menuContent = document.getElementById("menu-content");
  if (menuContent.style.display === "block") {
    menuContent.style.display = "none";
  } else {
    menuContent.style.display = "block";
  }
}


// Second Action:
// Scroll Actions and Behaviour
// Hide/SHow the header and navigation when I scroll down or up.

// Get the previous scroll position 
let prevScrollPos = window.pageYOffset;

// Action when I scroll the webpage
window.onscroll = function() {
  scrollFunction();
}

// Breakdown of webpage scroll action/behaviour
function scrollFunction() {

    // Get current scroll position
  let currentScrollPos = window.pageYOffset;
//   if scrolled up, reveal the header and navigation bar otherwise hide it!
  if(prevScrollPos > currentScrollPos) {
    document.getElementById("global-navbar").style.top = "0";
    document.getElementById("mobile-menu").style.top = "0";
  } else {
    document.getElementById("global-navbar").style.top = "-128px";
    document.getElementById("mobile-menu").style.top = "-64px";
  }
//   With the function completed, current scroll position becomes prvious scroll position. RInse and repeat!
  prevScrollPos = currentScrollPos;
}


// Third ACtion:
// Display current spotlight month and year
let currentDate = new Date();

const options = {month: 'short', year: 'numeric'};
let spotlightMonth = new Intl.DateTimeFormat('en-GB', options).format(currentDate);

// apply to span tag on html 
document.getElementById("curMonth").innerHTML = spotlightMonth;
