import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegistro: FormGroup;

  constructor(private serviceUsuario: UsuarioService) { }

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

    }, this.passwordRepeatValidator)
  }


  passwordRepeatValidator(group: FormGroup) {
    let pwd = group.controls['pwd'].value
    let pwdRepeat = group.controls['pwdRepeat'].value
    return (pwd ==pwdRepeat) ? null : { repeatClave: "Las contraseñas deben ser iguales" }
  }


  manejarFomulario(){
    this.serviceUsuario.newUsuario(this.formRegistro.value).subscribe(res=>{
      
      console.log(res)
      
    })
   }

}
