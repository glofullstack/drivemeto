import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  formPerfil: FormGroup
  constructor() { }

  ngOnInit() {
    this.formPerfil = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      mail: new FormControl('',[
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      ]),
      fecha_nacimiento: new FormControl('',[this.fechaValidator]),
      sexo: new FormControl(''),
      pwd: new FormControl(''),
      pwdRepeat: new FormControl(''),
      fotoPerfil: new FormControl(''),
      username: new FormControl(''),
  }, this.passwordRepeatValidator)

  }

  fechaValidator(control){
    if(isNaN(control.value)){
      // console.log('entra')
      return {'fecha_nacimiento': 'DEBE SER UN NUMERO'};
    }
    if(control.value < 1919 || control.value > 2000 ){
      return {'fecha_nacimiento': 'el año debe estar entre 1919 y 2010'}
    }
    return null
  }


  passwordRepeatValidator(group: FormGroup) {
    let pwd = group.controls['pwd'].value
    let pwdRepeat = group.controls['pwdRepeat'].value

      console.log(group.controls['pwd'].value)
      console.log(group.controls['pwdRepeat'].value)

    return (pwd ==pwdRepeat) ? null : { repeatClave: "Las contraseñas deben ser iguales" }
  }


  manejarFomuPerfil(formuvalue){
    console.log(this.formPerfil.value)
  }


}
