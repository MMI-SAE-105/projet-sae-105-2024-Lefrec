const menu = document.querySelector(".menu");
const btn = document.querySelector(".header__menu-btn");
const icon = document.querySelector(".header__menu-icon");


btn.addEventListener("click", (event) => {
    const isOpen = btn.ariaExpanded=="true";
    console.log(isOpen);
    console.log(!isOpen);
    btn.ariaExpanded = !isOpen;
    menu.ariaHidden = isOpen;
    document.body.classList.toggle("noscroll");
})