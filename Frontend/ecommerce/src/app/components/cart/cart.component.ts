import { ProductService } from './../../services/product.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private CartService: CartService, private ProductService:ProductService) {
  }
  ngOnInit(): void {



  }

  }




