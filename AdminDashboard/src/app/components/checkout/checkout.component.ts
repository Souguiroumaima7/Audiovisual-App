import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutform!:FormGroup
  items = this.cartService.getProducts();
  constructor(private formbuilder:FormBuilder, private cartService:CartService) { }

  ngOnInit(): void {

this.checkoutform = this.formbuilder.group({
  Client : this.formbuilder.group({
    firstName:[''],
    lastName:[''],
    email:['']
  }),
  shippingAdress: this.formbuilder.group({
    street:[''],
    city:[''],
    state:[''],
    country:[''],
    zipCode:['']
  }),
  BillingAdress: this.formbuilder.group({
    street:[''],
    city:[''],
    state:[''],
    country:[''],
    zipCode:['']
  }),
  creditcard: this.formbuilder.group({
    cardtype:[''],
    nameoncard:[''],
    securitycode:[''],
    exprirationMonth:[''],
    exprirationYear:[''],


  }),
});
  }
  onSubmit(): void{
    this.cartService.removeAllCart()
    console.warn('Your order has been submitted', this.checkoutform.value);
    this.checkoutform.reset();
  }


}
