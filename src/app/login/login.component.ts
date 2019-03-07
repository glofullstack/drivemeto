import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginDone = new EventEmitter()

  constructor(private serviceUsuario : UsuarioService) { }

  ngOnInit() {
  }


  manejarLogin(formValue){
    this.serviceUsuario.login(formValue.value).subscribe(res=>{
      
      localStorage.setItem('token', JSON.stringify(res['token']));
      this.loginDone.emit(JSON.stringify(res['token']))
    })
    formValue.reset()
  }

}
