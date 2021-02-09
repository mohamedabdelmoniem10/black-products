import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'product/:slug',
    component: SingleProductPageComponent,
  },
  {
    path: 'checkout/:slug',
    component: SingleProductPageComponent
  },
  {
    path: 'product-category/:slug',
    component: ProductCategoryComponent
  },
  // {
  //   path: 'checkout/:slug',
  //   component: CheckoutComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
