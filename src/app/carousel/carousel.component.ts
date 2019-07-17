import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {
  images;
  constructor(
    private productService: ProductsService,
    config: NgbCarouselConfig
  ) {
    this.images = this.productService.getCarousel();
    console.log(this.images);
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

}
