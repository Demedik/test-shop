import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { HttpService } from './http.service';

import { IProduct, SelectOptionsEnum } from './../app.constants';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends HttpService<{products: IProduct}> {
  constructor(http: HttpClient) {
    super(http);
  }

  public getProducts (orderBy: SelectOptionsEnum, offset: number) {
    return super.GET('product/all', { orderBy, offset });
  }
}
