import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayasComponent } from '../playas/playas.component';
import { DetalleComponent } from '../playas/detalle/detalle.component';
import { FormComponent } from '../playas/form/form.component';
import { LoginComponent } from '../usuarios/login/login.component';
import { VerMunicipioComponent } from '../municipios/verMunicipio/verMunicipio.component';
import { FormuComponent } from '../municipios/formu/formu.component';
import { MunicipiosComponent } from '../municipios/municipios.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/playas',
    pathMatch:'full'
  },
  {
    path:'playas',
    component:PlayasComponent,
  },
  {
    path:'playas/crear',
    component:FormComponent
  },
  {
    path:'playas/editar/:id',
    component:FormComponent
  },
  {
    path:'playas/ver/:id',
    component:DetalleComponent
  },
  {
    path:'municipios',
    component:MunicipiosComponent,
  },
  {
    path:'municipios/crear',
    component:FormuComponent
  },
  {
    path:'municipios/editar/:id',
    component:FormuComponent
  },
  {
    path:'municipios/ver/:id',
    component:VerMunicipioComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'**',
    redirectTo:'',

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
