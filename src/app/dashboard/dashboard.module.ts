import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortCutsComponent } from './short-cuts/short-cuts.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [ShortCutsComponent, MenuComponent, ToolbarComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
