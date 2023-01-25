let idProd = () => {
    let id = parseInt(Math.random() * 1000);
    return (id);
}

class producto {
    constructor(descripcion, marca, precio, img, idProd, stock) {
        this.marca = marca;
        this.descripcion = descripcion;
        this.precio = precio;
        this.img = img;
        this.code = idProd;
        this.stock = stock;
    }
}



class ProductManager {
    #precioBaseGanancia;
    constructor() {
        this.#precioBaseGanancia = 0.15;
        this.prod = new Array();
    }
    getProd = () => {
        return this.prod;
    }
    addProd = (descripcion, marca, precio, img, idProd, stock) => {
        let nuevoProd = new producto(descripcion, marca, (precio + (precio * this.#precioBaseGanancia)), img, idProd, stock);
        this.prod.push(nuevoProd);
    }

}

let crearProducto = new ProductManager();
console.log(crearProducto);
console.log(crearProducto.getProd());
crearProducto.addProd("Celular", "Iphone XS", 200, "sin img", idProd(), 10);
console.log(crearProducto.getProd());




