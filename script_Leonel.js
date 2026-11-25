/*
Juan Leonel Bojorquez Teran 262766
Practica Callbacks
*/
    
//Ejercicio 1
// Espera 3 segundos para ejecutar el callback
function principal(callback) {
    setTimeout(() => {
        callback();
    }, 3000);
}

principal(() => {
    console.log("Exito");
});

//Ejercicio 2
//Aqui declaramos cada una de las operaciones que se pueden realizar
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}

// Aqui hice la funcion principal la cual recibe los numeros y la operacion
function operacion(num1, num2, callback){

    resultado = callback(num1, num2);
    console.log(resultado);

}

operacion(10, 5, sumar);
operacion(10, 5, restar);
operacion(10, 5, multiplicar);
operacion(10, 5, dividir);


// Ejercicio 3
/*
Creamos la funcion de cortar ingredientes y cuando pasen 2 segundos
muestra un mensaje de que fueron cortados y manda el callback
*/
function cortarIngredientes(callback){

    setTimeout(() => {
        console.log("Ingredientes cortados");
        callback();
    }, 2000);
}

/*
Creamos la funcion de cocinar y cuando pasen 2 segundos
muestra un mensaje de que fueron cocinados y manda el callback
*/
function cocinar(callback){
    setTimeout(() => {
        console.log("Platillo cocinado");
        callback();
    }, 2000);
}

/*
Creamos la funcion de servir platos y cuando pasen 2 segundos
muestra un mensaje de que fueron servidos
*/
function servirPlato(){
    setTimeout(() => {
        console.log("Platillo servido");
    }, 2000);
}

cortarIngredientes( ()=>{
    cocinar( ()=>{
        servirPlato();
    });
});







