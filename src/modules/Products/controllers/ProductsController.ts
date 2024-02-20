import { Request, Response } from "express";
import { ProductsService } from "../services/ProductsService";

class ProductsController {
  async create(request: Request, response: Response): Promise<Response> {
    const input = request.body;

    const service = new ProductsService();
    await service.create(input);

    return response.status(201).send();
  }
}

export { ProductsController }