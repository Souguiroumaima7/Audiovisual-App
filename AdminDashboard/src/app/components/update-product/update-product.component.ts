import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  submitted = false;
  form!:FormGroup;
  id = this.ActivatedRoute.snapshot.params["id"]
  product:any

constructor(private ActivatedRoute : ActivatedRoute,private productService:ProductService, private formBuilder:FormBuilder, private route:Router) { }

 ngOnInit(): void {
  this.getbyid()

  this.form = this.formBuilder.group(
    {
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    })
 }

 getbyid() {
   this.productService.getbyid(this.id).subscribe((res:any)=>{
   this.product = res["data"]
   this.form.patchValue({
    name:res["data"].name,
    description:res["data"].description,
    price:res["data"].price
   })
   console.log("Product Detail",this.product)
   })

   }

   UpdateProduct() {
    this.productService.updateproducts(this.id,this.form.value).subscribe((res:any) =>
    {
      console.log(res)
      Swal.fire("Product  updated")

      this.route.navigateByUrl("/product List")
    })
   }

}
