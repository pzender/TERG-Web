import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { MAX_PRICE, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  apiSuffix = '/api/products'

  public getProducts(limit = 10, offset = 0, name = '', priceFrom = 0, priceTo = MAX_PRICE): Observable<Product[]> {
    let params = new HttpParams()
      .set('limit', limit.toString())
      .set('offset', offset.toString())
      .set('search', name)
      .set('priceFrom', priceFrom.toString())
      .set('priceTo', priceTo.toString())
    return this.http.get<Product[]>(this.apiSuffix, { params });
  }

  public createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiSuffix, product);
  }
}
