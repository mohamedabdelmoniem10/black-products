import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SingleorderComponent } from './pages/singleorder/singleorder.component';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCheckoutComponent } from './components/product-checkout/product-checkout.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    OrdersComponent,
    ShopComponent,
    SingleorderComponent,
    ProductCardComponent,
    ProductComponent,
    ProductCheckoutComponent,
    NavComponent,
    FooterComponent,
    OrderListComponent,
    OrderComponent,
    SingleProductComponent,
    SingleProductPageComponent,
    LoginComponent,
    HeaderComponent,
    ProductSliderComponent,
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
