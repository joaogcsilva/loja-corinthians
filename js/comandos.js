//COMANDO JAVA PARA PÁGINA DE CADASTRO\\

function validaNome(event) {
    var nome = $("#nome").val();
    var regex = /[^(A-Za-z\u00C0-\u00FF )]+/i;

    nome = nome.replace(regex, '');

    //console.log("nome = " + nome);
    $("#nome").val(nome);
    $("#nome").focus(); // foco do mouse;
}

//COMANDO JAVA PARA O BOTÃO MENU\\

const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});