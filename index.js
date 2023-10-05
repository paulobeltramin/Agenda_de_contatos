

const form = document.getElementById("formulario");
const nomeContato = [];
const telContato1 = [];
const telContato2 = [];
let linhas = "";


form.addEventListener("submit", function (e) {
    e.preventDefault();
    newContact()


});
// add contatos
function newContact() {

    const nome = document.getElementById("nomeContato").value;
    const num1 = Number(document.getElementById("telefone1").value);
    const num2 = Number(document.getElementById("telefone2").value);
    const tbody = document.getElementById("tbody");
    const message = document.querySelector(".message")


    nomeContato.push(nome);
    telContato1.push(num1);
    telContato2.push(num2);

    let linha = "<tr>"
    linha += `<td> ${nome}</td>`
    linha += `<td> ${num1}</td>`
    linha += `<td> ${num2}</td>`
    "</tr>"

    linhas = linha;

    tbody.innerHTML += linha;

    if (linha) {
        message.style.display = "none"
    }
};