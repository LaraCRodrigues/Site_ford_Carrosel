let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}
const carroXL = new Car(
    "XL Cabine Simples 2.2 Diesel 4X4 MT 2022",
    "R$ 183.850",
    "511",
    "1.884",
    "235",
    "1.234",
    "2.2 Diesel",
    "160",
    "1.210",
    "16",
    "/Fotos/XL Cabine.jpg"
);

const carroXLS = new Car(
    "XLS 2.2 Diesel 4X4 AT 2022",
    "R$ 220.690",
    "511",
    "1.884",
    "235",
    "1.234",
    "2.2 Diesel",
    "160",
    "1.210",
    "17",
    "/Fotos/xls 2.2 diesel.jpg"
);

const carroStorm = new Car(
    "Storm 3.2 Diesel 4X4 AT 2022",
    "R$ 222.790",
    "511",
    "1.884",
    "235",
    "1.234",
    "3.2 Diesel",
    "200",
    "1.210",
    "17",
    "/Fotos/storm.jpg"
);
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {

    if(carClass instanceof Car){

        if(el.checked){

            if(GetCarArrPosition(carArr, carClass) === -1){
                carArr.push(carClass);
            }

        } else {

            let position = GetCarArrPosition(carArr, carClass);

            if(position !== -1){
                carArr.splice(position, 1);
            }
        }

    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {

    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();

    document.getElementById("modal-comparacao").style.display = "flex";
}

function HideCompare() {
    document.getElementById("modal-comparacao").style.display = "none";
}

function UpdateCompareTable() {

    let carro1 = carArr[0];
    let carro2 = carArr[1];

    // Modelo e imagem
    document.getElementById("modelo-1").innerHTML = carro1.nome;
    document.getElementById("modelo-2").innerHTML = carro2.nome;

    document.getElementById("imagem-1").src = carro1.image;
    document.getElementById("imagem-2").src = carro2.image;

    // Especificações
    document.getElementById("cacamba-1").innerHTML = carro1.alturaCacamba;
    document.getElementById("cacamba-2").innerHTML = carro2.alturaCacamba;

    document.getElementById("altura-1").innerHTML = carro1.alturaVeiculo;
    document.getElementById("altura-2").innerHTML = carro2.alturaVeiculo;

    document.getElementById("solo-1").innerHTML = carro1.alturaSolo;
    document.getElementById("solo-2").innerHTML = carro2.alturaSolo;

    document.getElementById("carga-1").innerHTML = carro1.capacidadeCarga;
    document.getElementById("carga-2").innerHTML = carro2.capacidadeCarga;

    document.getElementById("motor-1").innerHTML = carro1.motor;
    document.getElementById("motor-2").innerHTML = carro2.motor;

    document.getElementById("potencia-1").innerHTML = carro1.potencia;
    document.getElementById("potencia-2").innerHTML = carro2.potencia;

    document.getElementById("volume-1").innerHTML = carro1.volumeCacamba;
    document.getElementById("volume-2").innerHTML = carro2.volumeCacamba;

    document.getElementById("roda-1").innerHTML = carro1.roda;
    document.getElementById("roda-2").innerHTML = carro2.roda;

    document.getElementById("preco-1").innerHTML = carro1.preco;
    document.getElementById("preco-2").innerHTML = carro2.preco;
}

