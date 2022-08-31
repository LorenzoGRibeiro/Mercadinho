import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDERS_URL, ORDER_CREATE_URL } from '../shared/constants/urls';
import { Order } from '../shared/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  creat(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL, order)
  }

  getOrders(){
    return this.http.get<Order[]>(ORDERS_URL)
  }

}
