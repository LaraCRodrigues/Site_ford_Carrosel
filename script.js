const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let indice = 0;

function mostrarSlide(i){

    slides.forEach(slide => slide.classList.remove("ativado"));

    if(i >= slides.length){
        indice = 0;
    }else if(i < 0){
        indice = slides.length - 1;
    }else{
        indice = i;
    }

    slides[indice].classList.add("ativado");
}

next.addEventListener("click", () => {
    mostrarSlide(indice + 1);
});

prev.addEventListener("click", () => {
    mostrarSlide(indice - 1);
});

setInterval(() => {
    mostrarSlide(indice + 1);
}, 4000);