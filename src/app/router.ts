import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComponyFormComponent } from './components/compony-form/compony-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { CVPageComponent } from './components/cv-page/cv-page.component';
import { LoginComponent } from './components/login/login.component';

export const appRouts: Routes = [
    { path: '', component: HomeComponent },
    { path: 'companyForm', component: ComponyFormComponent },
    { path: 'emploteeForm', component: EmployeeFormComponent },
    { path: 'CVPage', component: CVPageComponent },
    { path: 'login', component: LoginComponent },

];