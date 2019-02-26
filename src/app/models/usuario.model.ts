export class Usuario {

    nombre: string;
    apellidos: string;
    mail: string;
    fecha_nacimiento: Date;
    sexo: string;
    pwd: string;
    fotoPerfil: string;
    username: string;

    constructor(pNombre, pApellidos, pMail, pFechaNacimiento, pSexo, pPwd, pFotoperfil, pUsername){
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.mail = pMail ;
        this.fecha_nacimiento = pFechaNacimiento;
        this.sexo = pSexo;
        this.pwd = pPwd;
        this.fotoPerfil = pFotoperfil;
        this.username = pUsername;
    }
}