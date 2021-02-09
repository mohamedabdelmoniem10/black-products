import { Component, OnInit } from '@angular/core';
import { GetDataServiceService } from 'src/app/get-data-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products;


  constructor(private service: GetDataServiceService) { }


  


  listAllProducts() {
    this.service.listAllProducts().subscribe(response => {
      this.products = response;
      this.service.updateArrOfProducts(response);
    });
  }
  listAllCategories() {
    this.service.listAllCategories().subscribe(res => {
      console.log('this is the response from woocommerce after time', res);
    });
  }


  ngOnInit() {
    this.listAllProducts();
    this.listAllCategories();
    
  }

}
