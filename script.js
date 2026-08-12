class Carousel {

    static contador = 0;

    constructor(imagem, titulo, url) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.url = url;
    }

    static imagens = [

        new Carousel(
            "/Fotos/imagem_2.jpg",
            "Conheça a nova Ford Ranger XL",
            "lancamento.html"
        ),

        new Carousel(
            "/Fotos/imagem_1.jpg",
            "Conheça a Ford Ranger XLS",
            "lancamento.html"
        ),

        new Carousel(
            "/Fotos/imagem_3.jpg",
            "Conheça a Ford Ranger",
            "lancamento.html"
        )

    ];

    static next() {

        const carousel = document.getElementById("carousel");
        const titulo = document.getElementById("carousel-titulo");

        const item = Carousel.imagens[Carousel.contador];

        carousel.style.backgroundImage = `url('${item.imagem}')`;

        titulo.innerHTML = `
            <h3>${item.titulo}</h3>
            <a href="${item.url}">Conferir aqui!</a>
        `;

        Carousel.contador++;

        if (Carousel.contador >= Carousel.imagens.length) {
            Carousel.contador = 0;
        }
    }

    static anterior() {

        Carousel.contador--;

        if (Carousel.contador < 0) {
            Carousel.contador = Carousel.imagens.length - 1;
        }

        const carousel = document.getElementById("carousel");
        const titulo = document.getElementById("carousel-titulo");

        const item = Carousel.imagens[Carousel.contador];

        carousel.style.backgroundImage = `url('${item.imagem}')`;

        titulo.innerHTML = `
            <h3>${item.titulo}</h3>
            <a href="${item.url}">Conferir aqui!</a>
        `;
    }

    static start() {

        Carousel.next();

        const depois = document.querySelector(".frente");
        const antes = document.querySelector(".tras");

        depois.addEventListener("click", () => {
            Carousel.next();
        });

        antes.addEventListener("click", () => {
            Carousel.anterior();
        });

        setInterval(() => {
            Carousel.next();
        }, 2000);
    }
}

Carousel.start();



