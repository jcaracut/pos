import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = `${environment.API}`;
  constructor(private http: HttpClient) { }
  
  
  GetProducts(): Observable<Product[]>{
    // return this.http.get<Product[]>(`${this.url}/api/products`);
    return this.http.get(`${this.url}/api/products`).pipe(map((result:any)=>result.data.products));
  }
}
