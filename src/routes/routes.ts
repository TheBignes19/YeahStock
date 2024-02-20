import { Router } from "express";
import { productsRoutes } from "../modules/Products/routes/productsRoutes";

const routes = Router();

routes.use("/products",productsRoutes)


export { routes } 