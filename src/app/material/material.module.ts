import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,

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
  MatSnackBarModule,
  MatDialogModule

]

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
