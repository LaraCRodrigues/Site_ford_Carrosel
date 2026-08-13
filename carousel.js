let carrosselArr = [
    "/Fotos/imagem_1.jpg",
    "/Fotos/imagem_2.jpg",
    "/Fotos/imagem_3.jpg"
];

let titulosArr = [
    "Está é a nova Ranger Ford 2022. Verfique as novidades do modelo.",
    "Ford a nossa história",
    "Ford Bronco 2022. O SUV que veio para revolucionar o mercado."
];
class Carousel {

    static Start(lista) {

        if(lista) {

            if(lista.length > 0) {

                Carousel._sequencia = 0;
                Carousel._tamanho = lista.length;

                Carousel.Mostrar();

                Carousel._intervalo = setInterval(function() {
                    Carousel.Next();
                }, 5000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {

        Carousel._sequencia++;

        if(Carousel._sequencia >= Carousel._tamanho) {
            Carousel._sequencia = 0;
        }

        Carousel.Mostrar();
    }

    static Previous() {

        Carousel._sequencia--;

        if(Carousel._sequencia < 0) {
            Carousel._sequencia = Carousel._tamanho - 1;
        }

        Carousel.Mostrar();
    }

    static Mostrar() {

        let areaCarrossel = document.getElementById("carousel");

        areaCarrossel.innerHTML = "";

        let imagem = document.createElement("img");

        imagem.src = carrosselArr[Carousel._sequencia];

        imagem.classList.add("foto_centro");

        areaCarrossel.appendChild(imagem);
        
        document.getElementById("carousel-titulo").innerHTML =
        titulosArr[Carousel._sequencia];
    }
}

Carousel.Start(carrosselArr);

document.querySelector(".frente").addEventListener("click", function() {

    clearInterval(Carousel._intervalo);

    Carousel.Next();

});

document.querySelector(".tras").addEventListener("click", function() {

    clearInterval(Carousel._intervalo);

    Carousel.Previous();

});