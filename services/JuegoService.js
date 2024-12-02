import { Juego } from "../models/models.js";
import { validarJuego } from "../utils/validarJuego.js";

class Service {
    model = new Juego();
    getAll = async () => {
        try {
            const juegos = await this.model.obtenerTodos()
            return juegos;
        } catch (error) {
            throw error;
        }
    };

    create = async (body) => {
        try {
            const { nombre, categoria, precio, stock  } = body;
            validarJuego(nombre, categoria, precio, stock);
            const nuevoJuego = await this.model.agregarJuego({ nombre, categoria, precio: Number.parseFloat(precio), stock: Number.parseInt(stock) });
            return nuevoJuego;
          } catch (error) {
            throw error;
          }
    };     

}

export default Service;