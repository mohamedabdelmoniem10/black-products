import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product;


  constructor() { }

  productSpecs = {
    name: String,
    on_sale: Boolean,
    price: Number,
    regular_price: Number,
    sale_price: Number,
    images: Array
  }

  ngOnInit() {
    
  }

}
