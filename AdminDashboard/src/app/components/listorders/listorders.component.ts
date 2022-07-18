import { FormGroup } from '@angular/forms';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.css']
})
export class ListordersComponent implements OnInit {
  listorders: any;
  p: number = 1;

  constructor(private OrderService:OrderService) { }

  ngOnInit(): void {
    this.getall()
  }
  getall () {
    this.OrderService.getorders().subscribe((res:any)=>{
      this.listorders = res["data"]
      console.log("listorders", this.listorders)
    })

  }


}


