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

    disminuirStock(idJuego) {
        //
    }
}


export default Juego;