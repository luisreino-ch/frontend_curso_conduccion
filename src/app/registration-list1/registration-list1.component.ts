

import { Component,OnInit } from '@angular/core';

import { UsuarioService} from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-list1',
  templateUrl: './registration-list1.component.html',
  styleUrls: ['./registration-list1.component.css']
})
export class RegistrationList1Component implements OnInit {

  public usuarios: any[] = [];



  constructor(
    public UsuariosService: UsuarioService,
    public router: Router,


  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }




  cargarUsuarios() {
    this.UsuariosService.getUsers().then(data => {
      this.usuarios = data as any[];
    });
  }


  eliminarUsuario(id: number) {
    this.UsuariosService.deleteUsuario(id)
      .then(() => {
        console.log('Usuario eliminado exitosamente');
        this.cargarUsuarios(); // Recargar la lista de usuarios después de la eliminación
      })
      .catch((error) => {
        console.error('Error al eliminar el usuario:', error);
      });
  }


  redirectToDatosUsuario(idusuarios: number){
    this.router.navigate(['/update', {idusuarios:idusuarios}]);
  }


}
