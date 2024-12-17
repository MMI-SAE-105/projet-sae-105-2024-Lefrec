const menu = document.querySelector(".menu");
const subMenu = document.querySelector(".sous-menu");
const btn = document.querySelector(".header__menu-btn");
const subBtn = document.querySelector("#btnSub");
const icon = document.querySelector(".header__icon");


btn.addEventListener("click", (event) => {
    let isOpen = btn.ariaExpanded=="true";
    btn.ariaExpanded = !isOpen;
    menu.ariaHidden = isOpen;
    document.body.classList.toggle("noscroll");
    console.log(isOpen);
    if (isOpen == true) {
        icon.src = "/assets/icon/menu-icon-bars.svg";
    } else {
        icon.src = "/assets/icon/menu-icon-cross.svg";
    }
})

subBtn.addEventListener("click", (event) => {
    let isOpen = subBtn.ariaExpanded=="true";
    subBtn.ariaExpanded = !isOpen;
    subMenu.ariaHidden = isOpen;
})