import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ComponyFormComponent } from './components/compony-form/compony-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { CVPageComponent } from './components/cv-page/cv-page.component';
import { NaveComponent } from './components/nave/nave.component';
import { LoginComponent } from './components/login/login.component';
//modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //npm install --save @ng-bootstrap/ng-bootstrap
import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { appRouts } from './router';
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponyFormComponent,
    EmployeeFormComponent,
    CVPageComponent,
    NaveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRouts),
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
