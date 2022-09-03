import { CartService } from './../../services/cart.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public filterCategory : any
  searchKey:string ="";
  listproduct :any
  product:any=[]
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.listproduct = res;
      this.filterCategory = res;
      this.listproduct.forEach((a:any) => {
        if(a.category ==="data projecteur" || a.category ==="wireless Microphones"){
          a.category ="Cameras"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.listproduct)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(product: any){
    this.cartService.addtoCart(product);
  }
  filter(category:string){
    this.filterCategory = this.listproduct
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}





