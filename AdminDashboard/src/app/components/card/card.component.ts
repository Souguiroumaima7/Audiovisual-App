import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  contactForm!: FormGroup;

  message :string = "";

  recivedMessage :string ="";

  @Input() classification: any;

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore
  }




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
