function saludar(nombre, callback){
    console.log(`Hola, ${nombre}`);

    callback();
}

function despedir(){
    console.log("Adios que tengas un buen dia");
}

//saludar("Federico", despedir);

let arrayNumeros = [1, 2, 3, 4, 5];

let nuevoArray = arrayNumeros.map( (numero) => numero + 1 );

//console.log(nuevoArray);

const functionCallback = (numero) => {
    if(numero%2 === 0){
        return numero;
    }else{
        return "No es par"

    }
};

const evaluarPares = arrayNumeros.map(functionCallback);

console.log(evaluarPares);