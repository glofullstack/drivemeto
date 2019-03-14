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
          if(val instanceof NavigationEnd){
            this.imagenRouter(router.url)
          }
      })
  }
  ngOnInit(){
  }

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
    }
    console.log(this.bgImagen)
  }

  
}
