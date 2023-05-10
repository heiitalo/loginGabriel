import { Empresa } from "../models/Empresa";

const createService = (body: any) => Empresa.create(body);

const findAllService = () => Empresa.find();

const findByIdService = (id: any) => Empresa.findById(id);

const updateService = (
  id: string,
  name: string,
  empresaName: string,
  email: string,
  telefone: string,
) =>
Empresa.findOneAndUpdate(
    { _id: id },
    {
      name,
      empresaName,
      email,
      telefone,
    }
  );

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
};
