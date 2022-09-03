import { CartService } from 'src/app/services/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

product:any= []
listproduct :any

   constructor(private CartService:CartService) { }

   ngOnInit(): void {}

   addtocart(product: any) {
    this.CartService.addtoCart(product);
  }

}

