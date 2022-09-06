import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicuentaAlumnoPageRoutingModule } from './micuenta-alumno-routing.module';

import { MicuentaAlumnoPage } from './micuenta-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicuentaAlumnoPageRoutingModule
  ],
  declarations: [MicuentaAlumnoPage]
})
export class MicuentaAlumnoPageModule {}
