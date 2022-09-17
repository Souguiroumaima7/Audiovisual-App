import { CategoryService } from './../../services/category.service';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Category } from 'src/app/models/category.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

  }


}
