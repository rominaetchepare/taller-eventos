function cartel(){
    alert("Hola!");
}
const boton = document.getElementById("miBoton");
const miDiv = document.getElementById("miDiv");

boton.addEventListener("click", function(event) {
    event.stopPropagation(); 
    notificacion(); 
});git 
miDiv.addEventListener("click", function(event) {
    alert("¡Hola! Soy el Div");
});