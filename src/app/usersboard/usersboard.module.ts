import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SigningComponent } from './signing/signing.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, HomeComponent, SigningComponent, ProductsComponent, CartComponent, ProfileComponent],
  imports: [
    CommonModule
  ]
})
export class UsersboardModule { }
