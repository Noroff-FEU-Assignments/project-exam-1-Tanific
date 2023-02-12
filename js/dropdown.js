/*hamburger menu mobile, rotate on click, rotate back when closed*/
let rotate = false;

function menuButton() {
  const button = document.querySelector('.dropbtn i');
  if (!rotate) {
    button.style.transform = "rotate(90deg)";
    rotate = true;
  } else {
    button.style.transform = "rotate(0deg)";
    rotate = false;
  }
  document.querySelector("#myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdown = document.querySelector(".dropdown-content");
    const isShowing = dropdown.classList.contains("show");

    if (isShowing) {
      dropdown.classList.remove("show");
    }

    const button = document.querySelector('.dropbtn i');
    button.style.transform = "rotate(0deg)";
    rotate = false;
  }
};
