const slides = document.querySelectorAll(".slide");
const depois = document.querySelector(".frente");
const antes = document.querySelector(".tras");

let indice = 0;

function mostrarSlide(i) {

    slides.forEach(slide => {
        slide.classList.remove("ativado");
    });

    if (i >= slides.length) {
        indice = 0;
    } else if (i < 0) {
        indice = slides.length - 1;
    } else {
        indice = i;
    }

    slides[indice].classList.add("ativado");
}

depois.addEventListener("click", () => {
    mostrarSlide(indice + 1);
});

antes.addEventListener("click", () => {
    mostrarSlide(indice - 1);
});

setInterval(() => {
    mostrarSlide(indice + 1);
}, 4000);