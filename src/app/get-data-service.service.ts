import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import  { uuid }  from 'uuid';

import shortid from 'shortid';



import * as oauth from 'oauth-signature';
import { BehaviorSubject } from 'rxjs';

const baseurl = 'https://dokkaneg.com/wp-json/wc/v3';
const urlTail = 'consumer_key=ck_75e909a99ae5c14fa30716431c667193f454530b&consumer_secret=cs_b4989f6f0d09165f8eda8a769a242766e2d05108';

const categories = `${baseurl}/products/categories?${urlTail}`;
const products = `${baseurl}/products?${urlTail}`;
const productsInCat = (id) => {
  return `${baseurl}/products?category=${id}&${urlTail}`;
};
const headers = {"Content-Type": "application/json"};
const createOrder = `${baseurl}/orders?${urlTail}`


@Injectable({
  providedIn: 'root'
})




export class GetDataServiceService {



  constructor(private http: HttpClient) { }
  

  // this below method for creating signature for http requests

  // createSignature(url) {
  //   let oauth_timestamp = Math.floor(Date.now()/1000);
  //   let nonce = shortid.generate();
  //   let ck = 'ck_16e14bcd1d9e43b0dce189d7001d86741fa08203';
  //   let cs = 'cs_8918d589623258a93d9ff038014cebc2f7b8eec8';
  //   let sign = oauth.generate(
  //     'GET', 
  //     url, 
  //     {
  //       oauth_consumer_key : ck,
  //       oauth_nonce : nonce,
  //       oauth_timestamp : oauth_timestamp,
  //       oauth_signature_method : 'HMAC-SHA1',
  //       oauth_version : '1.0',
  //     }, 
  //     cs,
  //     );

  //     return `${url}?oauth_consumer_key=${ck}&oauth_signature_method=HMAC-SHA1&oauth_timestamp=${oauth_timestamp}&oauth_nonce=${nonce}&oauth_version=1.0&oauth_signature=${sign}`;
  //   }
  

    private arrOfProductsSource = new BehaviorSubject(null);
    ArrOfProducts = this.arrOfProductsSource.asObservable();
    updateArrOfProducts(newArr) {
      this.arrOfProductsSource.next(newArr);
    }


    // this below method for getting product id 
    getProductId(slug) {
      
    }


    // this below method for list all product 
  listAllProducts() { 
    return this.http.get(products);
  }

  // this below method for list all categories
  listAllCategories() { 
    return this.http.get(categories);
  }

  productsByCat(catId) {
     return this.http.get(productsInCat(catId));
  }
  extractSingleProduct(id) {
    
  }

  postAnOrder(body) {
    // return this.http.post(createOrder, body, {headers});
  }






postOrder() {
  
}





}
