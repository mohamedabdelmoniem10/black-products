import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GetDataServiceService } from 'src/app/get-data-service.service';



@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.scss']
})
export class SingleProductPageComponent implements OnInit {

  constructor(private cookie: CookieService, 
    private _Activatedroute: ActivatedRoute,
    private service: GetDataServiceService,
    private router: Router
    ) {
      // force route reload whenever params change;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      console.log('this is the url', router.url)
      if(router.url.indexOf('checkout') > 0) {
        this.checkout = true;
      }else{
        this.checkout = false;
      }
     }
checkout;
  product;
  productParam;
  productArr;


  getFromProductArray(productArray) {
    this.productArr = productArray;
    this.product = this.productArr.filter(product => {
      return product.slug == this.productParam;
    });
  }


  currentProdct(param) {
    this.productParam = this._Activatedroute.snapshot.paramMap.get(param);

    this.service.ArrOfProducts.subscribe(res => {
      if(res == null) {
          this.service.listAllProducts().subscribe(res => {
            this.getFromProductArray(res);
          });
      }else{
        this.getFromProductArray(res);
      }
    });
  }


  



  ngOnInit() {


    this.currentProdct('slug');
    
  }

}
