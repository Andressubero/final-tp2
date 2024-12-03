class Juego  {
    juegos = [];

    async agregarJuego(nuevoJuego) {
        const id = this.juegos.length ? this.juegos[this.juegos.length - 1].id + 1 : 1
        this.juegos.push({...nuevoJuego, id });
        return {...nuevoJuego, id };
    }

    async obtenerTodos() {
        return this.juegos;
    }

    disminuirStock(idJuego, cantidad) {

        const juegoBuscado = this.juegos.find(j => j.id === Number.parseInt(idJuego));
        
        if (!juegoBuscado) {
            throw new Error("El juego no existe");
        }

        if (juegoBuscado.stock < cantidad) {
            throw new Error("No hay suficiente stock");
        }

        juegoBuscado.stock -= cantidad;
    }
}


export default Juego;