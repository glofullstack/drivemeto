import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DRIVEMETO';

  bgImagen: string;

  constructor(  private activatedRoute: ActivatedRoute,
    private router: Router){
      router.events.subscribe(val=>{
        // SACA LA RUTA ACTUAL
          if(val instanceof NavigationEnd){
            this.imagenRouter(router.url)
          }
      })
  }
  ngOnInit(){
  }

  // CAMBIA LA IMAGEN DE FONDO EN FUNCION DE LA RUTA EN LA QUE SE ENCUENTRE
  imagenRouter(routerUrl){

    switch(routerUrl){
      case "/home":
         this.bgImagen=" url('../assets/images/home.jpg')"
      break
      case "/search":
         this.bgImagen="url('../assets/images/buscar.jpg')"
      break
      case "/publicar":
         this.bgImagen="url('../assets/images/publicar.jpg')"
      break
      case "/perfil":
         this.bgImagen="url('../assets/images/perfil.jpg')"
      break
      case "/trayecto/:id":
      this.bgImagen="url('../assets/images/trayecto.jpg')"
       break
      default:
       this.bgImagen=" url('../assets/images/trayecto.jpg')"

    }

  }

  
}
