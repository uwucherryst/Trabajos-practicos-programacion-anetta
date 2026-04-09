
const btnInicio = document.getElementById("btn-inicio");
const btnAcerca = document.getElementById("btn-acerca");
const btnAyuda = document.getElementById("btn-ayuda");

const colores = ['#ffc0cb', '#ff69b4', '#ffe4ec', '#ffd1dc'];
let indice = 0;

function cambiarColorFondo() {
    document.body.style.backgroundColor = colores[indice];
    indice = (indice + 1) % colores.length;
}

btnInicio.addEventListener("click", function() {
    document.getElementById("inicio").scrollIntoView({ behavior: "smooth" });
    cambiarColorFondo();
});

btnAcerca.addEventListener("click", function() {
    document.getElementById("acerca").scrollIntoView({ behavior: "smooth" });
    cambiarColorFondo();
});

btnAyuda.addEventListener("click", function() {
    document.getElementById("ayuda").scrollIntoView({ behavior: "smooth" });
    cambiarColorFondo();
});
