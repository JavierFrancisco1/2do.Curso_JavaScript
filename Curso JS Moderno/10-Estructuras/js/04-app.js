// Operador mayor que y mayor que

const dinero = 100;
const totalAPagar = 500;
const tarjeta = false;
const cheque = false;

if (dinero >= totalAPagar) {
  console.log("Si podemos pagar");
}else if( cheque ){
    console.log('si tengo un cheque');
}else if( tarjeta){
    console.log('si puedo pagar por tengo la tarjeta');
} 
else {
  console.log("fondos insuficientes");
}
