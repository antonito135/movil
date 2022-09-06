import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  //VAMOS A CREAR NUESTRO ALUMNO:
  alumno = new FormGroup({
    rut: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,2}.[0-9]{3}.[0-9]{3}-[0-9kK]{1}')]),
    nom_completo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fecha_nac: new FormControl('', Validators.required),
    semestre: new FormControl('', [Validators.required,
                                    Validators.min(1),
                                    Validators.max(8)]),
    email: new FormControl('',[Validators.required,Validators.pattern('([a-z]{2,3}.[a-z]{1,20}@duocuc.cl|[a-z]{2,3}.[a-z]{1,20}@profesor.duoc.cl)')]),                              
    password: new FormControl('', [Validators.required,
                                    Validators.minLength(6),
                                    Validators.maxLength(18)]),
    tipo: new FormControl('Alumno')
  });

  //VAMOS A CREAR EL ARREGLO QUE TENDRA TODOS LOS USUARIOS REGISTRADOS DESDE EL SERVICIO:
  //usuarios: any[] = [];
  verificar_password: string;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    //this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  //método que desencadena el formulario con el boton submit:
  registrar(){
    if (this.alumno.controls.password.value != this.verificar_password) {
      alert('CONTRASEÑAS NO COINCIDEN!');
      return;
    }
    if(this.alumno.controls.nom_completo.value.trim() == "" ){
      alert('NO SE PUEDE INGRESAR DATOS VACIOS!');
      return;
    }

    this.usuarioService.agregarUsuario(this.alumno.value);
    this.alumno.reset();
    alert('USUARIO REGISTRADO!');

    this.router.navigate(['/login']);
  }

}