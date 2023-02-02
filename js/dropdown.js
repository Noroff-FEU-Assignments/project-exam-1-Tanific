/*hamburger menu mobile*/
function menuButton() {
    document.querySelector("#myDropdown").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      const dropdown = document.querySelector(".dropdown-content");
      const isShowing = dropdown.classList.contains("show");
  
      if (isShowing) {
        dropdown.classList.remove("show");
      }
    }
  };