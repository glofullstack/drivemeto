import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { validateConfig } from '@angular/router/src/config';
import { TrayectoService } from '../trayecto.service';


@Component({
  selector: 'new-trayecto',
  templateUrl: './new-trayecto.component.html',
  styleUrls: ['./new-trayecto.component.css']
})
export class NewTrayectoComponent implements OnInit {

  formTrayecto; FormGroup;

  fechaActual: Date

  constructor(private serviceTrayecto: TrayectoService) {
    this.fechaActual = new Date();
   }

  ngOnInit() {
    this.formTrayecto = new FormGroup({
      origenTrayecto: new FormControl('', [Validators.required]),
      destinoTrayecto: new FormControl('', [Validators.required]),
      fechaTrayecto: new FormControl('',  [Validators.required]),
      horaTrayecto: new FormControl('10',  [Validators.required]),
      minutosTrayecto: new FormControl('00',  [Validators.required]),
      tipoTrayecto: new FormControl('habitual',  [Validators.required])
    })

  }

  manejarFomuTrayecto(formvalue){
    // console.log(this.formTrayecto.value)
    this.serviceTrayecto.newTrayecto(this.formTrayecto.value)
  }
}
