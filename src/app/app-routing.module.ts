import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationList1Component } from './registration-list1/registration-list1.component';
import { RegistrationList2Component } from './registration-list2/registration-list2.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { PaymentUploadComponent } from './payment-upload/payment-upload.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'form' },

  { path: 'list1', component: RegistrationList1Component },
  { path: 'list2', component: RegistrationList2Component },
  { path: 'login', component: LoginComponent },
  { path: 'form', component:  FormComponent},
  { path: 'payment', component:  PaymentUploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
