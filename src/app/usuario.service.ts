import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './models/usuario.model'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  arrUsuario: Usuario[]
  urlUsuario: string;

  constructor(private httpClient : HttpClient) {
    this.arrUsuario = []
    this.urlUsuario = 'http://localhost:3000/api/usuarios'
   }

  // /recoge los valores introducidos en el formulario de resgitro nuevo usuario a traves del manejador y desde aqui los manda por peticion POST a la base de datos 
  newUsuario(usuario){
    console.log(usuario.nombre)
    return this.httpClient.post<any[]>(`${this.urlUsuario}/create`, {
      'nombre': usuario.nombre,
      'mail': usuario.mail,
      'pwd': usuario.pwd,
    })
  }


// localhost:3000/api/usuarios/login
  login(usuario){
    console.log(usuario.mail)
    console.log(usuario.pwd)

    let headers = new HttpHeaders();
    headers = headers.set('Cart-Token', localStorage.getItem('idCart'))
    
    return this.httpClient.post<any[]>(`${this.urlUsuario}/login`,{
      'mail':usuario.mail,
      'pwd':usuario.pwd,
    })
  }


 

}
