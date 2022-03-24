import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayasComponent } from './playas.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../rutas/app-routing.module';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    PlayasComponent,
    FormComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    PlayasComponent,
    FormComponent,
    DetalleComponent
  ]
})
export class PlayasModule { }
