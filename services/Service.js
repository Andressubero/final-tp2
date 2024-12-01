import { Model } from "../models/models.js";

class Service {

    getAll = async () => {
        try {
            // const roles = await Model.findAll()
            return { message: "getAll" };
        } catch (error) {
            throw error;
        }
    };

    getById = async (id) => {
        try {
          return { message: "getById" };
        } catch (error) {
            throw error;
        }
    };

    create = async (body) => {
        try {
            // const newRole = await Model.create(body);
            return { message: "create" };
          } catch (error) {
            throw error;
          }
    };

    update = async (body) => {
        try {
            // const { id, name, description } = body;
            // const updatedRole = await Model.update(
            //   { name, description },
            //   { where: { id } }
            // );
            return { message: "update" };
          } catch (error) {
            throw error;
          }
    }

    delete = async (id) => {
        try {
          // const deleted = await Model.delete({
          //   where: { id: id },
          // });
        //   if (deletedRole === 0) {
        //     throw new Error("Role not found");
        //   }
          return { message: "Delete" };
        } catch (error) {
          throw error;
        }
      };
      

}

export default Service;