import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { SigningComponent } from "./signing/signing.component";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { ProfileComponent } from "./profile/profile.component";
import { UsersboardComponent } from "./usersboard.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SigningComponent,
    ProductsComponent,
    CartComponent,
    ProfileComponent,
    UsersboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    // HttpClient,
    HttpClientModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SigningComponent,
    ProductsComponent,
    CartComponent,
    ProfileComponent,
  ],
})
export class UsersboardModule {}
