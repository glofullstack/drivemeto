import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './models/usuario.model'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  arrUsuario: Usuario[]
  urlUsuario: string;
  nombreUser:string;

  constructor(private httpClient : HttpClient) {
    this.arrUsuario = []
    this.urlUsuario = 'http://localhost:3000/api/usuarios'

    if(localStorage.getItem('token')){
      this.perfilUser().subscribe((res)=>{
        this.nombreUser = res['nombre']
      })
    }
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
    // console.log(usuario.mail)
    // console.log(usuario.pwd)
    return this.httpClient.post<any[]>(`${this.urlUsuario}/login`,{
      'mail':usuario.mail,
      'pwd':usuario.pwd,
    })
  }


  isUserLogged(){
   return localStorage.getItem('token') ? true : false
  }



  // localhost:3000/api/usuarios/perfil
  perfilUser(){
    return this.httpClient.post<any>(`${this.urlUsuario}/perfil`, {
      'token': JSON.parse(localStorage.getItem('token'))
     
    })
  }

  perfilUpdate(perfiluser){
    return this.httpClient.post<any[]>(`${this.urlUsuario}/userUpdate`, {
      'nombre' : perfiluser.nombre,
      'apellidos' : perfiluser.apellidos,
      'mail' : perfiluser.mail ,
      'fecha_nacimiento' : perfiluser.fechaNacimiento,
      'sexo' : perfiluser.sexo,
     
    })
  }
  
  updateImagen(urlimg){
    // 'fotoPerfil' : perfiluser.fotoperfil,
    return this.httpClient.post<any>(`${this.urlUsuario}/updateimg`, {
      'fotoPerfil' : urlimg,
      'token':JSON.parse(localStorage.getItem('token'))
    })
  }
  




}

