import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatListModule, MatMenuModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
