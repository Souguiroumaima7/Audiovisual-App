import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from './../../services/profile.service';
import { SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
 form!:FormGroup ;
id=this.activeroute.snapshot.params["id"]
  constructor(private profifleService:ProfileService, private formBuilder:FormBuilder,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
      })

   }

save() {
   
}
}
