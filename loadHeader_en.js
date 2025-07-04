// loadHeader.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("loadHeader_en.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });
});
