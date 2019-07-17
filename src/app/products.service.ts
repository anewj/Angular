import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPreOrder() {
    return this.http.get('http://localhost:4044/products/preOrder/true');
  }

  getCarousel() {
    return this.http.get('http://localhost:4044/carousel/');
  }
}
