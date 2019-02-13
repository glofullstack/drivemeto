import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegistro: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formRegistro = new FormGroup({
      nombre: new FormControl('',[
        Validators.required,
      ]),
      pwd:new FormControl('',[
          Validators.required,
      ]),
      pwdRepeat: new FormControl('',[
        Validators.required,
      ]),
      mail: new FormControl('',[
         Validators.required,
         Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
       ]), 
      fechaNacimiento:new FormControl('', [
        Validators.required, 
        this.fechaValidator]),

    }, this.passwordRepeatValidator)
  }

  fechaValidator(control){
    if(isNaN(control.value)){
      return {'fechanacimiento': 'DEBE SER UN NUMERO'};
    }

    if(control.value < 1980 || control.value > 2000 ){
      return {'fechanacimiento': 'el año debe estar entre 1980 y 2010'}
    }

    return null

  }

  passwordRepeatValidator(group: FormGroup) {
    let pwd = group.controls['pwd'].value
    let pwdRepeat = group.controls['pwdRepeat'].value
    return (pwd ==pwdRepeat) ? null : { repeatClave: "Las contraseñas deben ser iguales" }
  }


  manejarFomulario(){
    console.log(this.formRegistro.value)
    // this.formRegistro.reset();
  }

}
