import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
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
  delete(id:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.OrderService.deleteorders(id).subscribe((res:any)=>{
          console.log(res)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getall()
      })
    }
    })
  }


}
