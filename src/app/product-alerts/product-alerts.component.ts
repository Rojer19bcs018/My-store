import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
})
export class ProductAlerts {
    @Input() product!: Product;
    @Output() notify : EventEmitter<any> = new EventEmitter();
}
