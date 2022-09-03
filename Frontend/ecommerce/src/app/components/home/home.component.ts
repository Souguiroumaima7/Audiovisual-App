import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message :string = "";
  NewsletterForm!: FormGroup;
  recivedMessage :string ="";



  constructor(private fb: FormBuilder,private MessengerService:MessengerService) {}


  ngOnInit(): void {

    this.NewsletterForm = this.fb.group({});
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
