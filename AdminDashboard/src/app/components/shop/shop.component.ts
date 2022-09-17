import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  listproduct :any
  product:any=[]
  constructor( private cartService : CartService) { }

  ngOnInit(): void {

  }
  addtocart(product: any){
    this.cartService.addtoCart(product);
  }

}
