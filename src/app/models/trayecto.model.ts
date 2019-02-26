export class Trayecto {


    origenTrayecto: string;
    destinoTrayecto: string;
    fechaTrayecto: Date;
    horaTrayecto: number;
    minutosTrayecto:number;
    tipoTrayecto: string;
 
   constructor(pDestino, pOrigen, pFecha, pHora, pMinuto, pTipo) { 
    this.origenTrayecto = pDestino;
    this.destinoTrayecto = pOrigen;
    this.fechaTrayecto = pFecha;
    this.horaTrayecto = pHora;
    this.minutosTrayecto = pMinuto;
    this.tipoTrayecto = pTipo;
   }


 }