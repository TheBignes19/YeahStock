import { Product } from "../entities/Product";
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

  async get(id: string):Promise<Product> {
    const product= await productsRepository.findOne({
      where: {
        id,
      }
    });

    if(!product) throw new Error("Product not found")

    return product
  }

  async getList(skip:number,take:number):Promise<Product[]> {
    const products= await productsRepository.find({
      skip: skip,
      take: take,
    });

    return products
  }

  async update(id: string, input: any): Promise<void> {
    const product = await productsRepository.findOne({
      where:{
        id
      }
    });

    if(!product) throw new Error("Product not found");

    product.name = input.name
    product.quantity = input.quantity
    product.mesureUnity = input.mesureUnity
    product.purchasePrice = input.purchasePrice
    product.salesPrice = input.salesPrice
    product.currency = input.currency
    product.supplier = input.supplier
    product.active = input.active
    product.description = input.description

    await productsRepository.save(product)
  }
}

export { ProductsService }