import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit {

OrderForm!: FormGroup;

  message :string = "";

  recivedMessage :string ="";



  constructor(private formbuilder: FormBuilder,private MessengerService:MessagingService ) {}


  ngOnInit(): void {

    this.OrderForm = this.formbuilder.group({});
  }

  onSubmit() {}


  sendMessage()
  {
    console.log(this.message);
    this.MessengerService.sendMessage(this.message);
  }

reciveMessages()
{
  this.MessengerService.message$.subscribe(res=>{
    console.log(res);
    this.recivedMessage = res;
  })
}


}
