import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Playa } from '../playa';
import { PlayaService } from '../playa.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ]
})
export class DetalleComponent implements OnInit {

  titulo:string="Ver playa";
  playa!:Playa;
  fotoSeleccionada!:File;
  progreso!:number;
  imageSrc!:string;


  constructor(private playaService:PlayaService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.imageSrc = '/assets/playa.png';

    this.activatedRoute.paramMap.subscribe(
      params=>{
        let id:number =+params.get('id')!;

        if(id){
          this.playaService.getPlaya(id).subscribe(resp=> this.playa=resp);
        }
      }
    );
  }

  seleccionarImagen(event:any){
    this.fotoSeleccionada=event.target.files[0];
    console.log(this.fotoSeleccionada);
  }

  subirImagen():void{
    if(!this.fotoSeleccionada){
      swal('Error','Debe seleccionar una imagen','error');

    }else{
      this.playaService.subirImagen(this.fotoSeleccionada,this.playa.id)
      .subscribe(event=>{
        if(event.type==HttpEventType.UploadProgress){
          this.progreso=Math.round((event.loaded/event.total!)*100);
        }else if(event.type===HttpEventType.Response){
          let response:any=event.body;
          this.playa=response.playa as Playa;

          swal('La imagen se subió correctamente',response.mensaje,'success');
        }
      }
        )
    }
  }

}
