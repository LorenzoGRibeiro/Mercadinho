import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order!:any;
  constructor(activatedRoute: ActivatedRoute, private orderService:OrderService) {

    activatedRoute.params.subscribe((params) => {
      this.orderService.getOrders().subscribe((orders) => {
        this.order = orders.find((o:any) => o.id === params.id);
      })
    })
  }

  ngOnInit(): void {
  }


}
