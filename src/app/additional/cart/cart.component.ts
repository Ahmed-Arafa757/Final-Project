import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartArray = [];
  totalQuantity = 0;
  totalPrice = 0;
  isLogged: boolean = false;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cartArray = this.productService.cartProducts;
    this.updateQuantityPrice();
    if (localStorage.getItem('user id')) {
      this.isLogged = true;
    }
  }

  updateQuantityPrice() {
    this.totalQuantity = 0;
    this.totalPrice = 0;
    for (let index = 0; index < this.cartArray.length; index++) {
      this.totalQuantity += this.cartArray[index].quantity;
      this.totalPrice +=
        this.cartArray[index].quantity *
        this.cartArray[index].productPrice.finalPrice;
    }
    this.productService.addProductsToCart(this.cartArray);
  }

  deleteItem(item) {
    const index = this.cartArray.indexOf(item);
    this.cartArray.splice(index, 1);
    this.updateQuantityPrice();
  }
}
