import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:3000/';



  constructor(public http:HttpClient, public https:HttpClient) { }



  saveUsuario(usuario:any){
    return new Promise(resolve => {
      this.https.post(this.url+'usuario',usuario).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err)=> {
          console.log(err);
        }
      });
    });
  }

  getUsers(){
    return new Promise(resolve => {
      this.https.get(this.url+'usuarios').subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err)=> {
          console.log(err);
        }
      });
    });
  }

  getUsers1(){
    return new Promise(resolve => {
      this.http.get(this.url+'usuarios1').subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err)=> {
          console.log(err);
        }
      });
    });
  }



  getUserById(id: number){
    return new Promise(resolve => {
      this.http.get(this.url + 'usuario/getById/' + id).subscribe({
        next: (data) =>{
          resolve(data);
        },
        error:(err) =>{
          console.log(err);
        }
      });
    });
  }


  updateUsuario(id: number, usuario: any) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + 'usuario/update/' + id, usuario).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
          reject(err);
        }
      });
    });
  }





}
