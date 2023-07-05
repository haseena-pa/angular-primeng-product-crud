import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(category: string): Observable<Product[]> {
    const categoryUrl = category ? `/category/${category}` : '';
    return this.http.get<Product[]>(`https://fakestoreapi.com/products${categoryUrl}?sort=desc`);
  }

  addEditProduct(postData: any, selectedPdt: any) {
    if (!selectedPdt) {
      return this.http.post('https://fakestoreapi.com/products', postData);
    } else {
      return this.http.put(`https://fakestoreapi.com/products/${selectedPdt.id}`, postData);
    }

  }

  deleteProduct(productId: number) {
    return this.http.delete(`https://fakestoreapi.com/products/${productId}`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories');
  }
}
