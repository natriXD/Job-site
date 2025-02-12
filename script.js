document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");
    
    burgerMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("hidden");
    });
    
    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
    });
});