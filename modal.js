class Carro {

    constructor(
        modelo,
        imagem,
        cacamba,
        altura,
        solo,
        carga,
        motor,
        potencia,
        volume,
        roda,
        preco
    ) {
        this.modelo = modelo;
        this.imagem = imagem;
        this.cacamba = cacamba;
        this.altura = altura;
        this.solo = solo;
        this.carga = carga;
        this.motor = motor;
        this.potencia = potencia;
        this.volume = volume;
        this.roda = roda;
        this.preco = preco;
    }
}


// Lista dos veículos disponíveis
const carros = [

    new Carro(
        "XL Cabine Simples 2.2 Diesel 4X4 MT 2022",
        "/Fotos/XL Cabine.jpg",
        "511",
        "1821",
        "232",
        "1234",
        "2.2",
        "160",
        "1420",
        "Aço estampado 16",
        "R$ 183.850,00"
    ),

    new Carro(
        "XLS 2.2 Diesel 4X4 AT 2022",
        "/Fotos/xls 2.2 diesel.jpg",
        "511",
        "1821",
        "232",
        "1040",
        "2.2",
        "160",
        "1180",
        "Liga leve 17",
        "R$ 220.690,00"
    ),

    new Carro(
        "Storm 3.2 Diesel 4X4 AT 2022",
        "/Fotos/storm.jpg",
        "511",
        "1821",
        "232",
        "1040",
        "3.2",
        "200",
        "1180",
        "Liga leve 17",
        "R$ 222.790,00"
    )

];


// Array que guarda os carros selecionados para comparação
let carrosParaComparar = [];


// Elementos do HTML
const modal = document.getElementById("modal-comparacao");

const botaoComparar =
    document.querySelector(".container_btn button");

const botaoFechar =
    document.getElementById("btn-fechar");

const botaoFecharModal =
    document.getElementById("btn-fechar-modal");

const caixasSelecao =
    document.querySelectorAll(".checkbox-carro");


// --------------------------------------------------
// FUNÇÃO PARA ENCONTRAR A POSIÇÃO DO CARRO
// --------------------------------------------------

function obterPosicaoCarro(carro) {

    return carrosParaComparar.indexOf(carro);

}


// --------------------------------------------------
// ADICIONAR OU REMOVER CARRO DA COMPARAÇÃO
// --------------------------------------------------

function adicionarCarroComparacao(indice, caixaSelecao) {

    const carro = carros[indice];


    // Se o checkbox foi marcado
    if (caixaSelecao.checked) {

        // Verifica se já existem dois carros selecionados
        if (carrosParaComparar.length >= 2) {

            alert("Você pode comparar apenas dois veículos.");

            caixaSelecao.checked = false;

            return;
        }


        // Adiciona o carro à lista de comparação
        carrosParaComparar.push(carro);

    }


    // Se o checkbox foi desmarcado
    else {

        const posicao =
            obterPosicaoCarro(carro);


        // Verifica se o carro está na lista
        if (posicao !== -1) {

            // Remove o carro da lista
            carrosParaComparar.splice(posicao, 1);

        }

    }

}


// --------------------------------------------------
// MOSTRAR MODAL DE COMPARAÇÃO
// --------------------------------------------------

function mostrarComparacao() {

    // Verifica se foram selecionados dois carros
    if (carrosParaComparar.length < 2) {

        alert(
            "É necessário escolher dois veículos para realizar a comparação."
        );

        return;
    }


    // Atualiza os dados da tabela
    atualizarTabelaComparacao();


    // Exibe o modal
    modal.style.display = "flex";

}


// --------------------------------------------------
// ESCONDER MODAL DE COMPARAÇÃO
// --------------------------------------------------

function ocultarComparacao() {

    modal.style.display = "none";

}


// --------------------------------------------------
// ATUALIZAR TABELA DE COMPARAÇÃO
// --------------------------------------------------

function atualizarTabelaComparacao() {

    const carro1 = carrosParaComparar[0];
    const carro2 = carrosParaComparar[1];


    // --------------------------------------------------
    // MODELOS
    // --------------------------------------------------

    document.getElementById("modelo-1").textContent =
        carro1.modelo;

    document.getElementById("modelo-2").textContent =
        carro2.modelo;


    // --------------------------------------------------
    // CAÇAMBA
    // --------------------------------------------------

    document.getElementById("cacamba-1").textContent =
        carro1.cacamba;

    document.getElementById("cacamba-2").textContent =
        carro2.cacamba;


    // --------------------------------------------------
    // ALTURA DO VEÍCULO
    // --------------------------------------------------

    document.getElementById("altura-1").textContent =
        carro1.altura;

    document.getElementById("altura-2").textContent =
        carro2.altura;


    // --------------------------------------------------
    // ALTURA LIVRE DO SOLO
    // --------------------------------------------------

    document.getElementById("solo-1").textContent =
        carro1.solo;

    document.getElementById("solo-2").textContent =
        carro2.solo;


    // --------------------------------------------------
    // CAPACIDADE DE CARGA
    // --------------------------------------------------

    document.getElementById("carga-1").textContent =
        carro1.carga;

    document.getElementById("carga-2").textContent =
        carro2.carga;


    // --------------------------------------------------
    // MOTOR
    // --------------------------------------------------

    document.getElementById("motor-1").textContent =
        carro1.motor;

    document.getElementById("motor-2").textContent =
        carro2.motor;


    // --------------------------------------------------
    // POTÊNCIA
    // --------------------------------------------------

    document.getElementById("potencia-1").textContent =
        carro1.potencia;

    document.getElementById("potencia-2").textContent =
        carro2.potencia;


    // --------------------------------------------------
    // VOLUME DA CAÇAMBA
    // --------------------------------------------------

    document.getElementById("volume-1").textContent =
        carro1.volume;

    document.getElementById("volume-2").textContent =
        carro2.volume;


    // --------------------------------------------------
    // RODA
    // --------------------------------------------------

    document.getElementById("roda-1").textContent =
        carro1.roda;

    document.getElementById("roda-2").textContent =
        carro2.roda;


    // --------------------------------------------------
    // PREÇO
    // --------------------------------------------------

    document.getElementById("preco-1").textContent =
        carro1.preco;

    document.getElementById("preco-2").textContent =
        carro2.preco;


    // --------------------------------------------------
    // IMAGENS DOS VEÍCULOS
    // --------------------------------------------------

    document.getElementById("imagem-1").src =
        carro1.imagem;

    document.getElementById("imagem-2").src =
        carro2.imagem;

}


// --------------------------------------------------
// EVENTOS DOS CHECKBOXES
// --------------------------------------------------

caixasSelecao.forEach((caixaSelecao, indice) => {

    caixaSelecao.addEventListener("change", () => {

        adicionarCarroComparacao(
            indice,
            caixaSelecao
        );

    });

});


// --------------------------------------------------
// BOTÃO COMPARAR
// --------------------------------------------------

botaoComparar.addEventListener("click", () => {

    mostrarComparacao();

});


// --------------------------------------------------
// BOTÃO X
// --------------------------------------------------

botaoFechar.addEventListener("click", () => {

    ocultarComparacao();

});


// --------------------------------------------------
// BOTÃO FECHAR
// --------------------------------------------------

botaoFecharModal.addEventListener("click", () => {

    ocultarComparacao();

});


// --------------------------------------------------
// CLICAR FORA DO MODAL
// --------------------------------------------------

modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {

        ocultarComparacao();

    }

});