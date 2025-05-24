const metodosPago = ["Tarjeta", "Paypal", "Transferencia", "Efectivo"];

const metodoUsuario = "Transferencia";

if(metodosPago.includes(metodoUsuario)) {
    console.log("Metodo de pago aceptado");
}else{
    console.log("Metodo de pago no valido");
}