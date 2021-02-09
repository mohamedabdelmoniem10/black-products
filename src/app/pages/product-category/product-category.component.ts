import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataServiceService } from 'src/app/get-data-service.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  constructor(
    private _Activatedroute: ActivatedRoute,
    private service: GetDataServiceService,
    private router: Router
  ) {
      // force route reload whenever params change;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }



  productsInCat;
  productByCat(catId) {
    console.log(catId)
    this.service.productsByCat(catId).subscribe(res => {
      this.productsInCat = res;
    })
  }

  categoryParam;
  catId;
  productCategory(param, cats) {
    this.categoryParam = this._Activatedroute.snapshot.paramMap.get(param);
    this.catId = cats.filter(cat => {
      return cat[param] == this.categoryParam;
    })
    this.productByCat(this.catId[0].id);
  }

  // cats
  ngOnInit() {
    this.service.listAllCategories().subscribe(cats => {
      // this.cats = cats;
      this.productCategory('slug', cats);
    })
  }

}
