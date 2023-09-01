import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-loginfin',
  templateUrl: './loginfin.component.html',
  styleUrls: ['./loginfin.component.css']
})
export class LoginfinComponent implements OnInit {

  user = {
    username: '',
    pass: ''
  }

  loginForm!: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  get usuariotxt(){
    return this.loginForm.get('usuario');
  }
  get contratxt(){
    return this.loginForm.get('password');
  }

  isFieldInvalid(field: string) {
    const formControl = this.loginForm.get(field);
    return formControl?.invalid && (formControl?.touched || formControl?.dirty);
  }


  logIn() {
    console.log(this.user);
    this.authService.singin(this.user).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['list1']);
    }, error => {
      console.error(error); // Opcional: Imprimir el error en la consola para fines de depuración
      alert('Usuario inválido');
    });
  }
  


}
