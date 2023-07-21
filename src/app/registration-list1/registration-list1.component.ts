

import { User } from './../models/register.model';
import { Component, ViewChild,OnInit } from '@angular/core';
import{MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from './../services/api.service';

import { UsuarioService} from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-list1',
  templateUrl: './registration-list1.component.html',
  styleUrls: ['./registration-list1.component.css']
})
export class RegistrationList1Component implements OnInit {

  public usuarios:any;



  constructor(
    public UsuariosService : UsuarioService,
    public router : Router){

  }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  redirectToDatosUsuario(idusuario: number){
    this.router.navigate(['/mostrarUsuario', {idusuario:idusuario}]);
  }

  cargarUsuarios(){
    this.UsuariosService.getUsers().then(data =>{
      this.usuarios = data;
    })
  }

  



}
