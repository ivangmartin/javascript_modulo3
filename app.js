/***************************** CALCULAR TOTAL COMPRA CON Y SIN IVA ***************************************************/


const product = {
    count: 3,
    price: 12.55,
    type: "ropa"
};

if(product.count < 0) 
    product.count = 0;

let totalSin = product.count * product.price;

console.log("El total de la compra sin IVA es: " + totalSin);

let iva = 0.21;
switch(product.type){
    case "alimentacion": iva = 0.1;
    break;
    case "libro": iva = 0.04;
    break;
};

let subidaIva = product.price * iva;
let precioCon = product.price + subidaIva;

console.log("El precio del producto con IVA es: " + precioCon);

/***************************** CALCULAR SUELDO ***************************************************/

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
}

let retencion = 0;

if(empleado.bruto >= 12000){
    if(empleado.bruto >= 24000){
        if(empleado.bruto >= 34000){
            retencion= 0.30;
        }else retencion= 0.16;
    }else retencion= 0.08;
    
}

if(empleado.hijos > 0) retencion = retencion - 0.02;

let neto = empleado.bruto - (empleado.bruto * retencion);

console.log("El sueldo neto anual es de: " + neto);

console.log("El sueldo neto mensual es de: " + (neto/empleado.pagas));

