import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicuentaAlumnoPage } from './micuenta-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: MicuentaAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicuentaAlumnoPageRoutingModule {}
