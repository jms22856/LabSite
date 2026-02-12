const header_toggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".mobile-nav")

header_toggle.addEventListener("click", () => {
    console.log("Button was clicked");
    header.classList.toggle("active");
})

const open_mobile_sidebar = document.querySelector(".nav-toggle");
const close_mobile_sidebar = document.querySelector(".close-mobile-nav");
const mobile_sidebar = document.querySelector(".nav-mobile");

const overlay = document.querySelector(".overlay");

open_mobile_sidebar.addEventListener("click", () => {
    mobile_sidebar.classList.add("active");
    overlay.classList.add("show");
})

close_mobile_sidebar.addEventListener("click", () => {
    mobile_sidebar.classList.remove("active");
    overlay.classList.remove("show");
})


let paulClickCount = 0;
const paulPFP = document.getElementById("PI-PFP");

paulPFP.addEventListener("click", () => {
    paulClickCount++;

    if (paulClickCount == 5) {
        window.location.href = "https://www.coolmathgames.com/";
    }
});
