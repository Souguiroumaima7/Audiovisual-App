import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { ShopService } from './../../services/shop.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public totalitem :number = 0 ; 
  constructor(private CartService:CartService)   {}
  ngOnInit(): void {
        
    this.CartService.getProducts().subscribe(res=>{
      this.totalitem = res.length ;
    })
  }
}





     