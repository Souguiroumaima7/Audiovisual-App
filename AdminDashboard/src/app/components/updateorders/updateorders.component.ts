import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from './../../services/order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateorders',
  templateUrl: './updateorders.component.html',
  styleUrls: ['./updateorders.component.css']
})
export class UpdateordersComponent implements OnInit {
  order:any
  submitted = false;
  form!:FormGroup;
  id=this.activeroute.snapshot.params["id"]
    constructor(private OrderService:OrderService,private activeroute:ActivatedRoute, private formBuilder:FormBuilder, private route:Router) { }

    ngOnInit(): void {
      this.getordbyid()
      this.form = this.formBuilder.group(
        {
          name: ['', Validators.required],
          description: ['', Validators.required]
        })
    }

    getordbyid() {
      this.OrderService.getordbyid(this.id).subscribe((res:any)=>{
        this.order =res["data"]
        this.form.patchValue({
         name:res["data"].name,
         description:res["data"].description,
        })
        console.log("detail product",this.order)
        })
      }
        updateorders(): void {
          this.OrderService.updateorders(this.id,this.form.value).subscribe((res:any) =>{
            console.log(res)
            Swal.fire(" orders updated")
            this.route.navigateByUrl("/listorders")
          })
      }


}
