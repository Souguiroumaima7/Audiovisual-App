import { FormBuilder } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id=this.ActivatedRoute.snapshot.params["id"]
  constructor(private ProfileService:ProfileService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

/* updateprofile(id:any) {
      
  this.ProfileService.updateProfile(this.id,this.form.).subscribe
} */
  
}
