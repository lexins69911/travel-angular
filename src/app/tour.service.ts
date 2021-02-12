import { Injectable } from '@angular/core';
// import { NgxIndexedDBService } from 'ngx-indexed-db';
// import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ID, Message, Operator, Order, Tour } from './model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService, TOKEN_HEADER } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class TourService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  getTours(): Observable<Tour[]> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.get<Tour[]>("http://5.101.123.79:8085/api/get/tour/all", {headers: headers});
  }

  removeTour(id: ID): Observable<Tour[]> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.post<Tour[]>("http://5.101.123.79:8085/api/admin/tour/delete", id, {headers: headers})
    
  }

  addTour(tour: Tour): Observable<Tour[]> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.post<Tour[]>("http://5.101.123.79:8085/api/admin/tour/add", tour, {headers:headers});
  }

  updateTour(tour: Tour): Observable<Tour[]> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.post<Tour[]>("http://5.101.123.79:8085/api/admin/tour/update", tour, {headers:headers});
  }

  getOperators(): Observable<Operator[]> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.get<Operator[]>("http://5.101.123.79:8085/api/get/operator/all", {headers:headers});
  }

  addOperator(operator: Operator): Observable<Operator[]> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.post<Operator[]>("http://5.101.123.79:8085/api/admin/operator/add", operator, {headers:headers});
  }

  getContactMessages(): Observable<Message[]> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.get<Message[]>("http://5.101.123.79:8085/api/get/message/all", {headers:headers})
  }

  addContact(contact: Message): Observable<Message[]> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.post<Message[]>("http://5.101.123.79:8085/api/admin/message/add", contact, {headers:headers})
  }

  addOrder(order: Order){
    console.log("order:")
    console.log(order)
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.post<Order[]>("http://5.101.123.79:8085/api/admin/order/add", order, {headers:headers}).subscribe( (data) => console.log(data));
  }

  getOrders() {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.get("http://5.101.123.79:8085/api/get/order/all", {headers:headers});
  }

  getTour(id: number): Observable<Tour> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    const url = "http://5.101.123.79:8085/api/get/tour/" + id;
    return this.http.get<Tour>(url, {headers:headers});
  } 

  updateOrder(order: Order): Observable<Order[]> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.post<Order[]>("http://5.101.123.79:8085/api/admin/order/update", order, {headers:headers});
  }

  deleteOrder(id: ID): Observable<Order[]> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.post<Order[]>("http://5.101.123.79:8085/api/admin/order/delete", id, {headers:headers});
  }

  deleteMessage(message: Message): Observable<Message[]> {
    let headers = new HttpHeaders({ "Authorization" : "bearer "+this.token.getToken()});
    return this.http.post<Message[]>("http://5.101.123.79:8085/api/admin/message/delete", message, {headers:headers});
  }

  // findTour(request: any): Observable<Tour[]> {
    
  // }
}
