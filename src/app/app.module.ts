import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ComponyFormComponent } from './components/compony-form/compony-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { CVPageComponent } from './components/cv-page/cv-page.component';
import { NaveComponent } from './components/nave/nave.component';
//modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //npm install --save @ng-bootstrap/ng-bootstrap
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponyFormComponent,
    EmployeeFormComponent,
    CVPageComponent,
    NaveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
