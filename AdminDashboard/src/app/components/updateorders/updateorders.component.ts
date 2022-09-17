import { OrderService } from 'src/app/services/order.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateorders',
  templateUrl: './updateorders.component.html',
  styleUrls: ['./updateorders.component.css']
})
export class UpdateordersComponent implements OnInit {

  submitted = false;
  form!:FormGroup;
  id = this.ActivatedRoute.snapshot.params["id"]
  product:any

constructor(private ActivatedRoute : ActivatedRoute,private OrderService:OrderService,
 private formBuilder:FormBuilder, private route:Router) { }

 ngOnInit(): void {
  this.getbyid()

  this.form = this.formBuilder.group(
    {
      name: ['', Validators.required],
      description: ['', Validators.required],

    })
 }

 getbyid() {
   this.OrderService.getordbyid(this.id).subscribe((res:any)=>{
   this.product = res["data"]
   this.form.patchValue({
    name:res["data"].name,
    description:res["data"].description,

   })
   console.log(" Order  Detail",this.product)
   })

   }

   UpdateOrders() {
    this.OrderService.updateorders(this.id,this.form.value).subscribe((res:any) =>
    {
      console.log(res)
      Swal.fire("Order  updated")

      this.route.navigateByUrl("/ListOrders")
    })
   }

}
