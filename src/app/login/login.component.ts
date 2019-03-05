import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceUsuario : UsuarioService) { }

  ngOnInit() {
  }


  manejarLogin(formValue){
    this.serviceUsuario.login(formValue).subscribe(res=>{
      console.log(res)
    })
  }

}
