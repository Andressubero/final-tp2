import service from "../services/VentaService.js";

class Controller {

  service = new service();

  getAll = async (req, res) => {
    try {
      const data = await this.service.getAll();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const { idJuego, cantidad  } = req.body;
      const data = await this.service.create({ idJuego, cantidad });
      res.status(201).send({ success: true, data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

}

export default Controller;