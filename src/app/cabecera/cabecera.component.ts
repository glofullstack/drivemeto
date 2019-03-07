import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
declare var $

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(public serviceUsuario: UsuarioService) { }

  ngOnInit() {
  }

  getTokenLogin($event){
      $('#loginModal').modal('hide')
  }

  logOut(){
    localStorage.clear()
  }

  
}
