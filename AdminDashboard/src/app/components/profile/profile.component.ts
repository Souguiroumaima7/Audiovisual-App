
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Component , Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MessagingService } from 'src/app/services/messaging.service';
import { Profile } from 'src/models/profile.model';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  contactForm!: FormGroup;

  message :string = "";

  recivedMessage :string ="";

Form ! : FormGroup

  profile!: Profile;
  currentUser!: User;
  isUser!: boolean;


  constructor(private fb: FormBuilder,private MessengerService:MessagingService,private route:ActivatedRoute) {}


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

onToggleFollowing(following: boolean) {
  this.profile.following = following;
}
  }




