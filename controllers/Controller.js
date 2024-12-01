import service from "../services/Service.js";

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

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.service.getById(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  create = async (req, res) => {
    try {
    //   const {  } = req.body;
      const data = await this.service.create({});
      res.status(201).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
    //   const {  } = req.body;
      const data = await this.service.update({ });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.service.delete(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default Controller;