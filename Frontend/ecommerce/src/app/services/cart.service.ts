import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
 public cardItemList :any =[]   

 public ProductList = new BehaviorSubject<any>([])  ;


 getProducts() {
  return this.ProductList.asObservable() ;
 }

 setProducts (product:any) {
    this.cardItemList.push(...product)  
    this.ProductList.next(product)
    
 }

 addToCart(product:any)  {
  this.cardItemList.push(product)   
  this.cardItemList.next(this.cardItemList)   
this.getTotalPrice() ;
 }


getTotalPrice() :number {
     
  let Total = 0 ;
  this.cardItemList.map((a:any)=>{
    Total += a.total 
  })
  return Total ;
}

removeCardItem(product:any)  {

this.cardItemList.map((a:any , index:any) =>{
  if(product.id === a.id)   {
    this.cardItemList.splice(index,1)  ;
  }
})

}

removeAllCart()  {

  this.cardItemList = [] ;
  this.ProductList.next(this.cardItemList)
}


}
