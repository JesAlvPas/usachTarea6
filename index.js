const productos = [
  { nombre: "Laptop",  precio: 1200, stock: 5 },
  { nombre: "Mouse",   precio: 25,   stock: 0 },
  { nombre: "Monitor", precio: 350,  stock: 3 },
  { nombre: "Teclado", precio: 80,   stock: 8 },
]

const productosEnStock = productos.filter(producto => producto.stock > 0);
console.log('Los productos en stock son:',productosEnStock);

productosEnStock.map(producto => producto.precio *= 0.85);
console.log('Productos con el descuento agregado:',productosEnStock);

const totalInventario = productosEnStock.reduce((acumulador,valor)=>acumulador+(valor.precio*valor.stock),0);
console.log('El valor total del inventario es:',totalInventario);

const productoCaro = productosEnStock.find(producto => producto.precio >=1000);
console.log('El producto mas caro es:',productoCaro);

async function obtenerDatos() {
  try {
    const respuesta = await productosEnStock;
    console.log('Los datos obtenidos de la respuesta del fetch son: ',respuesta);
  } catch (error) {
    console.error("Sucedio un el siguiente error al intentar obtener datos:", error);
  }
}

obtenerDatos();

