import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  formPerfil: FormGroup
  // +++PARA IMAGEN
  formImg: FormGroup
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  urlImagen: string

  // para meter la imagen solo
  fotoPerfilUsuario: string

  usuarioPerfil: any[]
  trayectosUsuario: any[]
  constructor(
    private usuarioService: UsuarioService,
    private storage: AngularFireStorage,
    private changeRef: ChangeDetectorRef,
    private router: Router,
  ) {
    
    this.formImg = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
    }, [
        this.validarImagen.bind(this)
      ])


  }

  ngOnInit() {
    this.usuarioService.perfilUser().subscribe(res => {
      this.formPerfil = new FormGroup({
        nombre: new FormControl(res.nombre),
        apellidos: new FormControl(res.apellidos),
        mail: new FormControl({ value: res.mail, disabled: true }),
        fecha_nacimiento: new FormControl(res.fecha_nacimiento, [this.fechaValidator]),
        sexo: new FormControl(res.sexo),
        // fotoPerfil: new FormControl(res.fotoPerfil),
      },
        //  this.passwordRepeatValidator
      )
      this.trayectosUsuario = res.trayectos
      this.usuarioPerfil = res
      
      this.fotoPerfilUsuario = `url('${res.fotoPerfil}')`
    })
    // FIN el ngOnInit------------------------------------------------------
  }

  fechaValidator(control) {
    if (isNaN(control.value)) {
      // console.log('entra')
      return { 'fecha_nacimiento': 'DEBE SER UN NUMERO' };
    }
    if (control.value < 1919 || control.value > 2000) {
      return { 'fecha_nacimiento': 'el año debe estar entre 1919 y 2010' }
    }
    return null
  }


  passwordRepeatValidator(group: FormGroup) {
    let pwd = group.controls['pwd'].value
    let pwdRepeat = group.controls['pwdRepeat'].value
    return (pwd == pwdRepeat) ? null : { repeatClave: "Las contraseñas deben ser iguales" }
  }


  manejarFomuPerfil() {
    //  recibe ls datos del formulario del perfil
    this.formPerfil.value.token = JSON.parse(localStorage.getItem('token'))
    this.usuarioService.perfilUpdate(this.formPerfil.value).subscribe(res => {
      console.log(res)
    })

  }

  // ++++++++++++++++++++++++IMAGEN PERFIL FIREBASE
  validarImagen(group) {
    if (this.urlImagen) {
      return null
    } else {
      return { imagen: 'la imagen es obligatoria' }
    }
  }


  onSubmit() {
    // console.log(this.formImg.value)
    // this.formImg.value.imagen = this.urlImagen
    this.usuarioService.updateImagen( this.urlImagen ).subscribe(res=>{
      console.log(res)
      // this.router.navigate(['/perfil'])

    })
  
  }

  onChangeImage($event) {
    //recupera el fichero del input
    const image = $event.target.files[0]
    console.log(image)

    //ruta dentro de firebase
    let imageName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    //  console.log(imageName)
    const filePath = `imagenes/${imageName}.jpg`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, image);


    // observe percentage changes
    // es un observable uqe se ejecuta cuando cambia el % de subida
    this.uploadPercent = task.percentageChanges();

    // get notified when the download URL is available
    //  indica cuando se a terminado de subir la imagen
    // getdown-->es a url public que luego alamcenaremso en nuestra BBDD
    let self = this
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL()
        this.downloadURL.subscribe(url => {
          self.urlImagen = url
          self.fotoPerfilUsuario = url
          console.log(self.fotoPerfilUsuario)
          self.changeRef.detectChanges()
        })
      })
    ).subscribe()

  }


}
