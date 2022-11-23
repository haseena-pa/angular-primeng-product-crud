import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products?sort=desc');
  }

  addEditProduct(postData: any, selectedPdt: any) {
    if (!selectedPdt) {
      return this.http.post('https://fakestoreapi.com/products', postData);
    } else {
      return this.http.put(`https://fakestoreapi.com/products/${selectedPdt.id}`, postData);
    }

  }
}
