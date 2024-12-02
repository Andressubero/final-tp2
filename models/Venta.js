class Venta  {
    ventas = [];

    async agregarVenta(nuevaVenta) {
        const id = this.ventas.length ? this.ventas[this.ventas.length - 1].id + 1 : 1
        this.ventas.push({...nuevaVenta, id });
        return {...nuevaVenta, id };
    }

    async obtenerTodas() {
        return this.ventas;
    }

}


export default Venta;