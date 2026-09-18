let mostrandoResultado = false;

function agregarAlRecuadro(input) {
    const recuadro = document.getElementById("recuadro");
    if (mostrandoResultado) {
        recuadro.value = "";
        mostrandoResultado = false;
    }
    recuadro.value += input;
}

function calcular(){
    const recuadro = document.getElementById("recuadro");
    try {
        recuadro.value = eval(recuadro.value);
        mostrandoResultado = true;
    }
    catch(error){
        recuadro.value = "Error";
        mostrandoResultado = true;
    }
}

function limpiarRecuadro(){
    const recuadro = document.getElementById("recuadro");
    recuadro.value = "";
    mostrandoResultado = false;
}

