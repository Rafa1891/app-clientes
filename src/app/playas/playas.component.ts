import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { Playa } from './playa';
import { PlayaService } from './playa.service';


@Component({
  selector: 'app-playas',
  templateUrl: 'playas.component.html',
  styles: [
  ]
})
export class PlayasComponent implements OnInit {

  imagenSrc!:string;
  playas!:Playa[];
  constructor(private servicioPlaya:PlayaService, public authService:AuthService) { }

  ngOnInit(): void {

    this.imagenSrc='assets/playa.png';
    this.servicioPlaya.getPlayas().subscribe(
      resp=>this.playas=resp
    );
  }

  delete(playa:Playa):void{
    swal({
      title:'Está seguro?',
      text:`Seguro que desea eliminar la playa ${playa.nombre}`,
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
          this.servicioPlaya.delete(playa.id).subscribe(
            resp=>{
              this.playas=this.playas.filter(cli => cli !== playa)
              swal('Playa eliminada',`Playa ${playa.nombre} eliminada con éxito`,'success');
            }
          )
        }
      }
      );



    }
  }




