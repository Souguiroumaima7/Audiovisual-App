import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  submitted!: boolean;

  constructor(private form:FormBuilder,private CartService:CartService) { }

  ngOnInit(): void {

}



}

