import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = `${environment.API}`;
  constructor(private http: HttpClient) { }
  
  
  GetProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/api/products`);
  }
}
