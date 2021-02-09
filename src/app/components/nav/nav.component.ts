import { Component, OnInit } from '@angular/core';
import { GetDataServiceService } from 'src/app/get-data-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private service: GetDataServiceService
  ) { }

    categories;
    // allProducts;
    // productsInCat;

    // productByCat(param, paramTerm) {
    //   this.service.productsByCat().subscribe(res => {
    //     console.log(res);
    //     this.allProducts = res;
    //     this.productsInCat = this.allProducts.filter(product =>{
    //      for(let cat of product.categories) {
    //        return cat[paramTerm] == param;
    //      }
    //    })
    //    console.log('this is the products in cat', this.productsInCat)
    //   })
    // }

    listCategories() {
      this.service.listAllCategories().subscribe(res => {
        this.categories = res;
      });

    }


  ngOnInit() {
    this.listCategories();
  }

}
