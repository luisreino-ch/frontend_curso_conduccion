import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import {MatTableModule} from '@angular/material/table';
import { RegistrationList1Component } from './registration-list1/registration-list1.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { RegistrationList2Component } from './registration-list2/registration-list2.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { PaymentUploadComponent } from './payment-upload/payment-upload.component';

import { NgxCaptchaModule } from 'ngx-captcha';
import { UpdateComponent } from './update/update.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationList1Component,
    RegistrationList2Component,
    LoginComponent,
    FormComponent,
    PaymentUploadComponent,
    UpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    NgxCaptchaModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
