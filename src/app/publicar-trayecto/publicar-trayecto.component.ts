import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrayectoService } from '../trayecto.service';

@Component({
  selector: 'publicar-trayecto',
  templateUrl: './publicar-trayecto.component.html',
  styleUrls: ['./publicar-trayecto.component.css']
})
export class PublicarTrayectoComponent implements OnInit {
  // formTrayecto: FormGroup;
  constructor(private servicioTrayecto: TrayectoService) { }

  ngOnInit() {
    // this.formTrayecto = new FormGroup({
    //   origenTrayecto: new FormControl('',[
    //    Validators.required,
    //   ]),
    //   destinoTrayecto: new FormControl('',[
    //     Validators.required,
    //   ]),
    //   fechaTrayecto: new FormControl('',[
    //     Validators.required, 
    //     // this.fechaEval
    //   ]),
    //   horaTrayecto: new FormControl('',[
    //     Validators.required,
    //   ]),
    //   minutosTrayecto: new FormControl('',[
    //     Validators.required,
    //   ]),

    // })
  }

  // fechaEval(control){
  //   console.log(control.value)
  //   // if(control.value < 2019){
  //   //  return {'fechaTrayecto': 'no puedes viajar al pasado'}
  //   // }
  //    return null
  // }

  // manejarFomuTrayecto(){
  //   // console.log(this.formTrayecto.value)
  //   this.servicioTrayecto.newTrayecto(this.formTrayecto.value)
  // }
}
