import { Venta } from "../models/models.js";
import { validarVenta } from "../utils/validarVenta.js";

class Service {
    model = new Venta();
    getAll = async () => {
        try {
            const data = await this.model.obtenerTodas()
            return data;
        } catch (error) {
            throw error;
        }
    };

    create = async (body) => {
        try {
            const { idJuego, cantidad  } = body;
            validarVenta(idJuego, cantidad);
            const nuevaVenta = await this.model.agregarVenta({ idJuego: Number.parseFloat(idJuego), cantidad: Number.parseFloat(cantidad) });
            return nuevaVenta;
          } catch (error) {
            throw error;
          }
    };
}

export default Service;