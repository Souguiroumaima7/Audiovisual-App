import { Product } from './product.model';
export class CartItem {

  id: number;
  name: String;
  price: String;
  qty: any;
  quantity: any;


  constructor(id: number, product: Product, _qty = 1) {
    this.id = id;
    this.name = product.name;
    this.price = product.price;


  }
}
