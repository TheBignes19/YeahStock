import AppDataSource from "../../../database/data-source";
import { Product } from "../entities/Product";

export const productsRepository = AppDataSource.getRepository(Product);