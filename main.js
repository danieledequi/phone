const listaDeTeclas = document.querySelectorAll("input[type=button]");
const inputTel = document.querySelector("input[type=tel]");

for (let indice = 0; indice < listaDeTeclas.length;indice++) {
       const tecla = listaDeTeclas[indice];

    tecla.onclick = () => {
        inputTel.value += tecla.value;
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add("ativa");
        }
    };

    tecla.onkeyup = function () {
        tecla.classList.remove("ativa");
    };
}

function limparCampos() {
    document.getElementsByClassName("digitar")[0].value = "";
}
