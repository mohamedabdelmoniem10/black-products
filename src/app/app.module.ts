import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { UsersboardModule } from "./usersboard/usersboard.module";
import { RouterModule } from "@angular/router";
import { DashboardModule } from "./dashboard/dashboard.module";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UsersboardModule,
    RouterModule,
    DashboardModule,
    // HttpClient,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
