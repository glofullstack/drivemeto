export class Trayecto {


  origenTrayecto: String
  latOrigen: number
  longOrigen: number
  destinoTrayecto: String
  latDestino: number
  longDestino: number
  fechaTrayecto: Date
  horaTrayecto: number
  minutosTrayecto:number
  tipoTrayecto: String
 
   constructor(
    origenTrayecto,destinoTrayecto,fechaTrayecto,horaTrayecto,minutosTrayecto,tipoTrayecto) { 
      this.origenTrayecto = origenTrayecto,
      // this.latOrigen = latOrigen,
      // this.longOrigen = longOrigen,
      this.destinoTrayecto = destinoTrayecto,
      // this.latDestino = latDestino,
      // this.longDestino = longDestino,
      this.fechaTrayecto = fechaTrayecto,
      this.horaTrayecto = horaTrayecto,
      this.minutosTrayecto =minutosTrayecto,
      this.tipoTrayecto = tipoTrayecto
   }
  //  latOrigen,longOrigen,,latDestino,longDestino

 }
