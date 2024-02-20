import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("products")
class Product {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column({
    type: "varchar",
    length: "2",
    name: "mesureunity"
  })
  mesureUnity: string;

  @Column({
    type: "decimal",
    precision: 5,
    scale: 2,
    name: "purchaseprice"
  })
  purchasePrice: number;

  @Column({
    type: "decimal",
    precision: 5,
    scale: 2,
    name: "salesprice"
  })
  salesPrice: number;

  @Column({
    type: "varchar",
    length: "3"
  })
  currency: string;

  @Column()
  supplier: string;

  @Column()
  active: boolean;

  @Column({
    type: "text",
  })
  description: string;

  @CreateDateColumn({
    name: "createdat"
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: "updatedat"
  })
  updatedAt: Date;
}

export { Product }