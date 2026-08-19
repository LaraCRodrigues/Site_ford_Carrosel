class contato {

    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}
function Post(event, form) {

    console.log("POST FOI CHAMADO!");

    event.preventDefault();

    console.log("O formulário foi encontrado:", form);

    let nome = form.elements.namedItem("nome").value.trim();
    let email = form.elements.namedItem("email").value.trim();
    let telefone = form.elements.namedItem("telefone").value.trim();
    let tipoContato = form.elements.namedItem("contato").value;
    let mensagem = form.elements.namedItem("mensagem").value.trim();

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Telefone:", telefone);
    console.log("Tipo:", tipoContato);
    console.log("Mensagem:", mensagem);


    if (nome === "") {
        alert("Por favor, informe o seu nome.");
        return;
    }

    if (email === "") {
        alert("Por favor, informe o seu e-mail.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Informe um e-mail válido.");
        return;
    }

    if (telefone === "") {
        alert("Por favor, informe o seu telefone.");
        return;
    }

    if (tipoContato === "") {
        alert("Selecione o tipo de contato.");
        return;
    }

    if (mensagem === "") {
        alert("Por favor, escreva uma mensagem.");
        return;
    }

    let data = new contato(
        nome,
        email,
        telefone,
        tipoContato,
        mensagem
    );

    console.log("OBJETO CRIADO:");
    console.log(data);

    let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

    contatos.push(data);

    localStorage.setItem("contatos", JSON.stringify(contatos));

    console.log("DADOS SALVOS:");
    console.log(contatos);

    alert(
        "Obrigado sr(a) " +
        nome +
        "! Seus dados foram encaminhados com sucesso."
    );

    form.reset();
}

const aceiteTermos = document.getElementById("aceiteTermos");
const btnEnviar = document.getElementById("btnEnviar");

aceiteTermos.addEventListener("change", function () {
    btnEnviar.disabled = !aceiteTermos.checked;
});
