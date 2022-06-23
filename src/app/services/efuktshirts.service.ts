import { HttpClient } from '@angular/common/http';
import { ThirdPartyHttpService } from './third-party-http.service';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { IProduct, ThirdPartyUrls } from './../app.constants';

@Injectable({
  providedIn: 'root'
})

export class EfuktshirtsService extends ThirdPartyHttpService<{products: IProduct}> {
  constructor(http: HttpClient) {
    super(http, ThirdPartyUrls.EFUKTSHIRTS);
  }

  public getProducts () {
    return super.GET('products.json');
  }
}
