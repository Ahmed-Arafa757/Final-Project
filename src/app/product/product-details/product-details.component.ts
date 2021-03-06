import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from './../../_services/product.service';
import { Product } from './../../_model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  id: string;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      this.id = res.id;
      this.productService.productById(this.id).subscribe(
        (res: any) => {
          this.product = res;
        },
        (err) => {
          console.error(err);
        },
        () => {}
      );
    });
   
  }
}
