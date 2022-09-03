import { Product } from "./product.class";

export class Cartitem {
  id: string;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;

  constructor(product: Product) {
      this.id = product.id;
      this.name = product.name;
      this.imageUrl = product.imageUrl;
      this.unitPrice = product.Price
      this.quantity = 1;
  }
}
