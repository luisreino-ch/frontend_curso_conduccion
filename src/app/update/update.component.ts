import { Component,  OnInit } from '@angular/core';

import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit  {

  public usuario: any;
  public id: number;
  public estado: boolean = false;



  constructor(
    public usuarioService: UsuarioService, // Updated service variable name
    public activateRoute: ActivatedRoute // Updated route variable name
  ) {
    this.id = this.activateRoute.snapshot.params['idusuarios']; // Updated parameter name
  }

  ngOnInit(): void {
    this.getUsuarioById();
  }

  async getUsuarioById() {
    try {
      this.usuario = await this.usuarioService.getUserById(this.id);
      this.estado = this.usuario[0].estado;

    } catch (error) {
      console.log(error)
    }
  }



  async updateUsuario() {
    try {
      const usuario = {
        estado: this.estado
      };

      await this.usuarioService.updateUsuario(this.id, usuario); // Updated service variable name

      console.log('Usuario actualizado correctamente');
    } catch (error) {
      console.log(error);
    }
  }
  

}
