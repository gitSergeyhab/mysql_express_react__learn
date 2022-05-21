import { Request, Response } from "express";
import { Brand } from "../models/models";

class BrandController {
    async create(req: Request, res: Response) {
        const { name } = req.body;
        const brand = await Brand.create({ name });
        return res.status(200).json(brand)
    }

    async getAll(req: Request, res: Response) {
        const brands = await Brand.findAll();
        return res.status(201).json(brands);
    }
}

export const brandController = new BrandController()