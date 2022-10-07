import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,products } from '../app/products';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetails implements OnInit{
  product: Product | undefined;
  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    

    this.product = products.find(product => product.id === productIdFromRoute);
  }
  
}
