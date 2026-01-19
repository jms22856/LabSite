const header_toggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".mobile-nav")

header_toggle.addEventListener("click", () => {
    console.log("Button was clicked");
    header.classList.toggle("active");
})

const open_mobile_sidebar = document.querySelector(".nav-toggle");
const close_mobile_sidebar = document.querySelector(".close-mobile-nav")
const mobile_sidebar = document.querySelector(".nav-mobile")

open_mobile_sidebar.addEventListener("click", () => {
    mobile_sidebar.classList.add("active");
})

close_mobile_sidebar.addEventListener("click", () => {
    mobile_sidebar.classList.remove("active");
})
