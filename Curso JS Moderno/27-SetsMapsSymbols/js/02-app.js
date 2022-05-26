// WeakSet

const weakSet = new WeakSet();

const cliente = {
  nombre: "javier",
  saldo: 100,
};

weakSet.add(cliente);

// console.log(weakSet.has(Cliente2));
// weakSet.delete(cliente);
console.log(cliente);

console.log(weakSet);

/*
Los weakSets no se pueden agregar cualquier tipo de dato....solo objetos 
Los weakSets no se pueden iterar--
no tiene la propiedad size para saber su longitud de objetos
esas son las diferencias con los Sets que en los sets si se pueden iterar y saber su longitud 
y podemos cualquier tipo de dato...


*/
