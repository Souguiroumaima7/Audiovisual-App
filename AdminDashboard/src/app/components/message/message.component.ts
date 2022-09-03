import { MessagingService } from './../../services/messaging.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  contactForm!: FormGroup;

  message :string = "";

  recivedMessage :string ="";



  constructor(private fb: FormBuilder,private MessengerService:MessagingService ) {}


  ngOnInit(): void {

    this.contactForm = this.fb.group({});
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
