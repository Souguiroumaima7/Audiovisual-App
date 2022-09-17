import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit {
  ordersList:any
  submitted = false;
  form!:FormGroup;


constructor(private OrderService:OrderService ,private formbuilder:FormBuilder) {

}
ngOnInit(): void {


this.getallorders()
this.form = this.formbuilder.group(
  {
    name:['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    categories:['',Validators.required]
  })
}
//convenience getter for easy access to form fields
get f()  {
return this.form.controls;
}
onSubmit(): void {
this.submitted = true;
let formdata = new FormData() ;
formdata.append("ref", this.form.value.ref);
formdata.append("priceTotal",this.form.value.priceTotal);
formdata.append("date",this.form.value.date);
formdata.append("status",this.form.value.status);


 this.OrderService.addorders(formdata).subscribe((res:any)=>{
console.log(res)
})
console.log(JSON.stringify(this.form.value, null, 2))
}
onReset(): void {
this.submitted = false;
this.form.reset();
}
getallorders () {
this.OrderService.getorders().subscribe((res:any)=>{
this.OrderService = res["data"]
console.log("orders List", this.ordersList)
})
}

}
