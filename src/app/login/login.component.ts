import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginDone = new EventEmitter()

  error:boolean

  constructor(private serviceUsuario : UsuarioService, private router: Router) {
    this.error=false
   }

  ngOnInit() {
  }


 manejarLogin(formValue){
    this.serviceUsuario.login(formValue.value).subscribe(res=>{
    
      // devuelve error en el login si el mail no coincide
      if(res['error']){
        return this.error=true
      }
                  
      localStorage.setItem('token', JSON.stringify(res['token']));

      this.serviceUsuario.perfilUser().subscribe((userProfile)=>{
        this.serviceUsuario.nombreUser = userProfile.nombre
        this.loginDone.emit(JSON.stringify(res['token']))
        this.router.navigate(['/perfil'])
      })
      
    })
    formValue.reset()
  }



}
