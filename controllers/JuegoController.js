import service from "../services/JuegoService.js";

class Controller {

  service = new service();

  getAll = async (req, res) => {
    try {
      const data = await this.service.getAll();
      res.status(200).send({ success: true, data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };


  create = async (req, res) => {
    try {
      const { nombre, categoria, precio, stock  } = req.body;
      const data = await this.service.create({ nombre, categoria, precio, stock  });
      res.status(201).send({ success: true, data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

}

export default Controller;