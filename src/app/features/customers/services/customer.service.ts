import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string = `${environment.API}`;
  constructor(private http: HttpClient) { }
  
  
  GetCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.url}/api/customers`);
  }

}
