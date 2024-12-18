const formCarousel = document.querySelector(".form__carousel");
const next = document.querySelectorAll(".form__next");
const previous = document.querySelectorAll(".form__previous");

next.forEach(element => {
    element.addEventListener("click", (event) => {
        let width = document.querySelector(".form__panel").clientWidth+40;
        formCarousel.scrollBy({ left: width, behavior: "smooth" })
    })
});

previous.forEach(element => {
    element.addEventListener("click", (event) => {
        let width = document.querySelector(".form__panel").clientWidth+40;
        formCarousel.scrollBy({ left: -width, behavior: "smooth" })
    })
});
