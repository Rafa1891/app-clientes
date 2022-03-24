import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipiosComponent } from './municipios.component';
import { FormuComponent } from './formu/formu.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../rutas/app-routing.module';
import { VerMunicipioComponent } from './verMunicipio/verMunicipio.component';



@NgModule({
  declarations: [
    MunicipiosComponent,
    FormuComponent,
    VerMunicipioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    MunicipiosComponent,
    FormuComponent,
    VerMunicipioComponent
  ]
})
export class MunicipiosModule { }
