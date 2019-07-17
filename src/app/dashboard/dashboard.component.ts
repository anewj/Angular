import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  preOrder;

  constructor(
    private productService: ProductsService,
  ) {
    this.preOrder = this.productService.getPreOrder();
  }

  ngOnInit() {
  }

  hello() {
  }

}
