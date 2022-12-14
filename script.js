const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick) /* No se ponen los () para llamar la function - ya los pone el mismo metodo */
/* Es un metodo,hay que iniciarlo'()'  */ /* ('evento'='click') ( atributo 1 , atributo 2=Codigo js//btnOnclick) */
/* agrega un Escuchador de evento/escucha cada vez que suceda cierto evento "click-btn" */
function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}


//Formulario

const form = document.querySelector('#form');
const pResult2 = document.querySelector('#resultForm');

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = formulario1.value + formulario2.value;
    pResult2.innerText = "Resultado: " + sumaInputs;
}