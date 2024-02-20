import { Router, Request } from "express";
import { ProductsController } from "../controllers/ProductsController";


const productsRoutes = Router();

productsRoutes.post("/", new ProductsController().create);
productsRoutes.get("/:id", new ProductsController().get);
productsRoutes.get("/", new ProductsController().getList);
productsRoutes.put("/:id", new ProductsController().update);

export { productsRoutes } 