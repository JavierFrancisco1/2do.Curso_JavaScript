// switch case

const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    pagar();
    break;
  case "cheque":
    console.log(`pagaste con: ${metodoPago}`);
    break;
  case "tarjeta":
    console.log(`pagaste con: ${metodoPago}`);
    break;
  default:
    console.log(
      "Aun no has seleccionado un metodo de pago o metodo de pago no soportado"
    );
    break;
}
function pagar() {
  console.log("pagando...");
}
