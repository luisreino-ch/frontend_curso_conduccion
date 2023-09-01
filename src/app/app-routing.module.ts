import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationList1Component } from './registration-list1/registration-list1.component';
import { RegistrationList2Component } from './registration-list2/registration-list2.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { PaymentUploadComponent } from './payment-upload/payment-upload.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'list1', component: RegistrationList1Component, canActivate: [AuthGuard]},
  { path: 'list2', component: RegistrationList2Component, canActivate: [AuthGuard]},
  { path: 'loginfin', component: LoginComponent},
  { path: 'form', component:  FormComponent},
  { path: 'payment', component:  PaymentUploadComponent},
  {path:'update', component: UpdateComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,MatToolbarModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
