import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Municipio } from 'src/app/municipios/municipio';
import { AuthService } from 'src/app/usuarios/auth.service';
import swal from 'sweetalert2';
import { Playa } from '../playa';
import { PlayaService } from '../playa.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  titulo:string="Nueva Playa";

  playa:Playa=new Playa();

  municipios!:Municipio[];



  constructor(private playaService:PlayaService,private router:Router,
    private activatedRoute:ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {

    if(this.authService.isAuthenticated()){
    this.playaService.getMunicipios().subscribe(
      resp=>this.municipios=resp
    );

    this.activatedRoute.paramMap.subscribe(
      params=>{
        let id=+params.get('id')!;
        if(id){
          this.playaService.getPlaya(id).subscribe(
            (resp)=> this.playa=resp
          )
        }
      }
    );
    }else{
      swal('No está autenticado','no autenticado','info');
      this.router.navigate(["/login"]);
    }
  }

  compararMunicipio(o1:Municipio,o2:Municipio):boolean{
    if(o1===undefined && o2===undefined){
      return true;
    }

    return o1===null || o2===null || o1===undefined || o2===undefined
    ? false : o1.id===o2.id;
  }

  create():void{
    console.log("formulario enviado");
    console.log(this.playa);

    this.playaService.create(this.playa).subscribe(
      resp=>{
        swal('Nueva playa',`${this.playa.nombre} creada con éxito.`);
        this.router.navigate(["/playas"]);
      },
      err=>{
        console.log('Código de error backend',err.status);
      }
    )
  }

  update():void{
    console.log(this.playa);
    this.playaService.update(this.playa).subscribe(
      resp=>{
        this.router.navigate(['/playas']);
        swal('Playa actualizada',`${this.playa.nombre}`,'success');
      },
      err=>{
        console.error('Código del error desde el backend '+err.status);
        console.error(err.error.errors);
      }
    )
  }

}
