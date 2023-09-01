import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get emailtxt(){
    return this.loginForm.get('email');
  }
  get contratxt(){
    return this.loginForm.get('password');
  }

  isFieldInvalid(field: string) {
    const formControl = this.loginForm.get(field);
    return formControl?.invalid && (formControl?.touched || formControl?.dirty);
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    // Aquí puedes agregar la lógica para validar las credenciales de inicio de sesión
    console.log('Email:', email);
    console.log('Contraseña:', password);
  }
}
