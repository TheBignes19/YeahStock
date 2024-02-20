import { Router, Request } from "express";
import { ProductsController } from "../controllers/ProductsController";


const productsRoutes = Router();

productsRoutes.post("/products", new ProductsController().create);

export { productsRoutes } 