const usuario = false;
const puedePagar = false;

if(usuario && puedePagar){
    console.log('si eres usuario y puedes pagar');
}
else if(!usuario && !puedePagar){
    console.log('No puedes comprar');
}
else if(!usuario){
    console.log('inicia sesion para continuar o haz una cuenta');
}
else if(!puedePagar){
console.log('No cuenta con los fondos suficientes');
}
