import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../app/cart.service';
import { Product,products } from '../app/products';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetails implements OnInit{
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService){}
   
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    

    this.product = products.find(product => product.id === productIdFromRoute);
  }
  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert("Your product has been added to cart")
  }
}
