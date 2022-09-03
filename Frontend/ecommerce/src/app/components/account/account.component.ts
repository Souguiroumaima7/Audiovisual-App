
import { Router } from '@angular/router';
import { RegistreService } from './../../services/registre.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import Validation from 'helper/match';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  submitted = false;
  form!:FormGroup;

  constructor(private formBuilder: FormBuilder,private ClientService:ClientService) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        adressL: ['', Validators.required],
        tel: ['', Validators.required],


        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
         validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
  get f()  {
    return this.form.controls;
  }
   onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.ClientService.registreclient(this.form.value).subscribe((res:any)=>{
     console.log(res)
    })
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  }
