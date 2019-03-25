import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { CanActivate } from '@angular/router'



@Injectable({
  providedIn: 'root'
})

export class RutasActivasGuard implements CanActivate  {
  
  constructor(private servicioUsuario: UsuarioService, private router: Router ){
  }

canActivate (){

    if(this.servicioUsuario.isUserLogged()){
      return true
    }else{
      return this.router.navigate(['/entra'])
    }
  }


}