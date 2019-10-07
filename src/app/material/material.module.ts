import { NgModule } from '@angular/core';
import {
  MatIconModule,
} from "@angular/material";

const Material = [
  MatIconModule
]

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
