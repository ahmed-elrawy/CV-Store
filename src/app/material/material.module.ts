import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,


} from "@angular/material";
import { MatSnackBarModule } from '@angular/material/snack-bar';


const Material = [
  MatIconModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule

]

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
