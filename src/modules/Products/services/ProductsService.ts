import { productsRepository } from "../repositories/productRepository"

class ProductsService {
  async create(input: any): Promise<void> {
    const repository = productsRepository;

      if (input.name.length <= 0 ) return;

      const productAlreadyExists = await repository.findOne({
        where: {
          name: input.name,
          supplier: input.supplier
        }
      });

    if (productAlreadyExists) return;

    const product = repository.create(input);
    await repository.save(product);
  }
}

export { ProductsService }