import { Component, OnInit, ViewChild } from '@angular/core';
import { TrayectoService } from '../trayecto.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';
declare var google
@Component({
  selector: 'trayecto',
  templateUrl: './trayecto.component.html',
  styleUrls: ['./trayecto.component.css']
})
export class TrayectoComponent implements OnInit {


  trayecto: any
  // contiene los usuarios apuntados a un trayecto
  usuariosTrayecto: any
  userlogado: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceTrayecto: TrayectoService,
    private servicioUsuario: UsuarioService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.serviceTrayecto.getTrayectoById(params.idTrayecto).subscribe(res => {
        // INFO DEL TRAYECTO
        this.trayecto = res
        // INFO DE LOS USUAIROS APUNTADOS AL TRAYECTO
        this.usuariosTrayecto = this.trayecto.usuarios
        this.loadMap()
      })

    })

 
  }

  @ViewChild('googleMap') gMap: any
  map: any

  arrMarkers: any[] = []
  directionsService: any
  directionsDisplay: any

  ngOnInit() {
      // el id del usuario logado
      this.serviceTrayecto.creadorlogeado(JSON.parse(localStorage.getItem('token'))).subscribe(res => {
        this.userlogado = res.id
      })
  

  }

  // crea el mapa
  loadMap() {
    this.directionsService = new google.maps.DirectionsService()
    this.directionsDisplay = new google.maps.DirectionsRenderer()
    // parametros del mapa
    let propsMap = {
      center: new google.maps.LatLng(40, -3),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADS,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.gMap.nativeElement, propsMap)
    this.directionsDisplay.setMap(this.map)

    this.generateRoute(
      new google.maps.LatLng(this.trayecto.latitudOrigen, this.trayecto.longitudOrigen),
      new google.maps.LatLng(this.trayecto.latitudDestino, this.trayecto.longitudDestino))
  }

  generateRoute(start, end) {
    let requestOpts = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode['DRIVING']
    }
    let self = this
    this.directionsService.route(requestOpts, (results) => {
      self.directionsDisplay.setDirections(results)
    })
  }

  handlerJoin() {
    this.serviceTrayecto.joinTrayecto(JSON.parse(localStorage.getItem('token')), this.trayecto.id).subscribe(res => {
      console.log(res)
    })
  }


  //BORRAR EL USUARIO LOGEADO DE UN TRAYECTO
  handlerBorrarse(){
    this.serviceTrayecto.borraut(JSON.parse(localStorage.getItem('token')), this.trayecto.id).subscribe(res=>{
      console.log(res)
    })
  }


  //COMPARA SI EL CREADOR DEL TRYAECTO ES EL USUARIO LOGADO
  creadorlogado() {
    return ((this.trayecto.fkUsuario == this.userlogado) ? true : false);
  }

  // UN USUARIO NO PUEDE APUNTARSE DOS VECES A UN TRAYECTO
  usuarioApuntado() {
    return this.usuariosTrayecto.filter(item => item.id == this.userlogado).length > 0 ? true : false
    // si contador igual a 0 el usuario logado no esta apuntado al trayecto si es mayor, esta
  }



}
