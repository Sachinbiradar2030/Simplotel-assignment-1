document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const listele = document.querySelector(".listele");

    menuToggle.addEventListener("click", function() {
        listele.classList.toggle("show");
    });
});