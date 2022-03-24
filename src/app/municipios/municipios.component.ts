import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { Municipio } from './municipio';

import { MunicipioService } from './municipio.service';


@Component({
  selector: 'app-municipios',
  templateUrl: 'municipios.component.html',
  styles: [
  ]
})
export class MunicipiosComponent implements OnInit {


  municipios!:Municipio[];
  constructor(private servicioMunicipio:MunicipioService, public authService:AuthService) { }

  ngOnInit(): void {


    this.servicioMunicipio.getMunicipios().subscribe(
      resp=>this.municipios=resp
    );
  }

  delete(municipio:Municipio):void{
    swal({
      title:'Está seguro?',
      text:`Seguro que desea eliminar el municipio ${municipio.nombre}`,
      type:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      confirmButtonText:'Sí, eliminar',
      cancelButtonText:'No, cancelar',
      confirmButtonClass:'btn btn-success',
      cancelButtonClass:'btn btn-danger',
      buttonsStyling:false,
      reverseButtons:true
    }).then((result)=>{
        if(result.value){
          this.servicioMunicipio.delete(municipio.id).subscribe(
            resp=>{
              this.municipios=this.municipios.filter(cli => cli !== municipio)
              swal('Municipio eliminado',`Municipio ${municipio.nombre} eliminado con éxito`,'success');
            }
          )
        }
      }
      );



    }
  }




