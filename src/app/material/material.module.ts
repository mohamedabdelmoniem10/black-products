import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatListModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
