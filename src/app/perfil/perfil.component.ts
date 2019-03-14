import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  formPerfil: FormGroup
  trayectosUsuario: any[]
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.perfilUser().subscribe(res => {

      this.formPerfil = new FormGroup({
        nombre: new FormControl(res.nombre),
        apellidos: new FormControl( res.apellidos),
        mail: new FormControl({ value: res.mail, disabled:true}),
        fecha_nacimiento: new FormControl(res.fecha_nacimiento, [this.fechaValidator]),
        sexo: new FormControl(res.sexo),
        fotoPerfil: new FormControl(res.fotoPerfil),
      },
      //  this.passwordRepeatValidator
      )
      this.trayectosUsuario=res.trayectos
  })
// FIN el ngOnInit------------------------------------------------------
  }

  fechaValidator(control) {
    if (isNaN(control.value)) {
      // console.log('entra')
      return { 'fecha_nacimiento': 'DEBE SER UN NUMERO' };
    }
    if (control.value < 1919 || control.value > 2000) {
      return { 'fecha_nacimiento': 'el año debe estar entre 1919 y 2010' }
    }
    return null
  }


  passwordRepeatValidator(group: FormGroup) {
    let pwd = group.controls['pwd'].value
    let pwdRepeat = group.controls['pwdRepeat'].value

    // console.log(group.controls['pwd'].value)
    // console.log(group.controls['pwdRepeat'].value)

    return (pwd == pwdRepeat) ? null : { repeatClave: "Las contraseñas deben ser iguales" }
  }


  manejarFomuPerfil() {
  //  recibe ls datos del formulario del perfil
    this.formPerfil.value.token = JSON.parse(localStorage.getItem('token'))

    this.usuarioService.perfilUpdate(this.formPerfil.value).subscribe(res => {
      console.log(res)
      
    })

  }


}
