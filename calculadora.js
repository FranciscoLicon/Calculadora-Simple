const operaciones = (e) => {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let result = document.getElementById("resultado");
    let resultado = 0;
    let operacion = e.target.id;

    if(operacion === "suma"){
         resultado = numero1 + numero2;
    } else if(operacion === "resta"){
         resultado = numero1 - numero2;
    } else if(operacion === "mult"){
         resultado = numero1 * numero2;
    } else if(operacion === "divide"){
         resultado = numero1 / numero2;
    }
    result.innerHTML = resultado;   
}

const botones = document.getElementById("botones");
botones.addEventListener("click",operaciones);