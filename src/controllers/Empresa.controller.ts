import { Request, Response } from "express";
import empresaService from "../services/Empresa.service";
import mongoose from "mongoose";

class EmpresaController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name, empresaName, email, telefone } = req.body;

    if (!name || !email || !empresaName || !telefone) {
      return res.status(400).json({ message: "preencha todos os campos" });
    }

    const empresa = await empresaService.createService(req.body);

    if (!empresa) {
      return res.status(400).json({ message: "erro ao cadastrar empresa" });
    }
    return res.status(201).json({
      message: "empresa cadastrada com sucesso!",
      user: {
        id: empresa._id,
        email,
        name,
        empresaName,
        telefone
      },
    });
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const empresas = await empresaService.findAllService();

    if (empresas.length === 0) {
      return res.status(400).json({ message: "não há empresas cadastradas." });
    }

    return res.json(empresas);
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "id invalido" });
    }

    const empresa = await empresaService.findByIdService(id);

    if (!empresa) {
      return res.status(400).json({ message: "empresa não encontrada" });
    }

    return res.json(empresa);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { name, email, empresaName, telefone } = req.body;

    if (!name && !email && !empresaName && !telefone) {
      return res
        .status(400)
        .json({ message: "preencha pelo menos um campo para ser atualizado" });
    }

    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "id invalido" });
    }

    const empresa = await empresaName.findByIdService(id);

    if (!empresa) {
      return res.status(400).json({ message: "empresa não encontrada" });
    }

    await empresaName.updateService(
      id,
      name,
      email,
      empresaName,
      telefone
    );

    return res.status(200).json({ message: "usuario atualizado", empresa });
  }
}

export { EmpresaController };
