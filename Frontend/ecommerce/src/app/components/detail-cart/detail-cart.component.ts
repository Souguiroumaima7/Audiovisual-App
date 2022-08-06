import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-cart',
  templateUrl: './detail-cart.component.html',
  styleUrls: ['./detail-cart.component.css']
})
export class DetailCartComponent implements OnInit {
   products : any = []
  public totalitem :number = 0 ;

  public Total !:number  ;

  constructor(private CartService:CartService) {}


  ngOnInit(): void {

    this.CartService.getProducts().subscribe(res=>{
       this.products = res
       this.Total = this.CartService.getTotalPrice()  ;

    })
  }
  addToCart(product:any) {
    this.CartService.addToCart(this.products)
  }

  removeItem(item:any){

    this.CartService.removeCardItem(item)  ;

  }

  emptycart()   {

    this.CartService.removeAllCart()  ;
  }

}
