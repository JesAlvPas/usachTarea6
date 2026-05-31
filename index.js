const productos = [
  { nombre: "Laptop",  precio: 1200, stock: 5 },
  { nombre: "Mouse",   precio: 25,   stock: 0 },
  { nombre: "Monitor", precio: 350,  stock: 3 },
  { nombre: "Teclado", precio: 80,   stock: 8 },
]

const productosEnStock = productos.filter(producto => producto.stock > 0);

productosEnStock.map(producto => producto.precio *= 0.85);

const totalInventario = productosEnStock.reduce((acumulador,valor)=>acumulador+(valor.precio*valor.stock),0);

const productoCaro = productosEnStock.find(producto => producto.precio >10);

async function obtenerDatos() {
  try {
    const respuesta = await productoCaro;
    // const datos = await respuesta.json();
    console.log('Los datos obtenidos de la respuesta del fetch son:',respuesta);
  } catch (error) {
    console.error("Algo falló:", error);
  }
}

obtenerDatos();



// console.log(productos);
// console.log(productosEnStock);
// console.log(totalInventario);
// console.log(productoCaro);

