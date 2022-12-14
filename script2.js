/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulación del DOM básica - Curso Práctico de JavaScript</title>
</head>
<body>
    <h1 pantalla="Platzilg" clase="verde">Manipulación del DOM básica</h1>

    <p>Esto es un párrafo</p>
    <p class="Parrafito">Esto es un párrafo con clase</p>
    <p id="pid">Esto es un párrafo con ID</p>

    <input placeholder="Escribe algo aquí">

    <script src="./script.js">
        
    </script>
    
</body>
</html> */

/* h1 */


const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");/* llama a todas laa p en una lista */
const parrafito = document.querySelector(".parrafito");
const pid = document.getElementById("pid");/* Para ID llama  con getElementById */
const input = document.querySelector("input");

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

/* Etiquetas */
h1.innerHTML = "patito <br> Feo";/* Nos permite modificar la etiqueta(atibuto) dentro de nuestro html */
h1.innerText = "patito <br> Feo";/* Pasa a texto lo que esta en js */

/* CLASES */
console.log(h1.getAttribute("pantalla"));
h1.setAttribute("class","rojo");/* Cambia Los atributos de los elementos (este caso el atributo rojo de la clase h1) de html  */

h1.classList.add("Rojo");/* Agrega un clase a una clase */
h1.classList.remove("verde");

h1.classList.toggle("verde");
h1.classList.contains("verde");/* True o falsedepende si el elemento tiene esa clase que necesitamos */ 

input.value = "456";

const img = document.createElement("img");
img.setAttribute("src", "https://images.pexels.com/photos/14558567/pexels-photo-14558567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
console.log(img);

pid.append(img)