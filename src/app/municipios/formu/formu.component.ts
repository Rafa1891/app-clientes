import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/usuarios/auth.service';
import swal from 'sweetalert2';
import { Municipio } from '../municipio';
import { MunicipioService } from '../municipio.service';


@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styles: [
  ]
})
export class FormuComponent implements OnInit {

  titulo:string="Nuevo Municipio";

  municipio:Municipio=new Municipio();

  municipios!:Municipio[];



  constructor(private municipioService:MunicipioService,private router:Router,
    private activatedRoute:ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {

    if(this.authService.isAuthenticated()){
    this.municipioService.getMunicipios().subscribe(
      resp=>this.municipios=resp
    );

    this.activatedRoute.paramMap.subscribe(
      params=>{
        let id=+params.get('id')!;
        if(id){
          this.municipioService.getMunicipio(id).subscribe(
            (resp)=> this.municipio=resp
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
    console.log(this.municipio);

    this.municipioService.create(this.municipio).subscribe(
      resp=>{
        swal('Nuevo municipio',`${this.municipio.nombre} creado con éxito.`);
        this.router.navigate(["/municipios"]);
      },
      err=>{
        console.log('Código de error backend',err.status);
      }
    )
  }

  update():void{
    console.log(this.municipio);
    this.municipioService.update(this.municipio).subscribe(
      resp=>{
        this.router.navigate(['/municipios']);
        swal('Municipio actualizado',`${this.municipio.nombre}`,'success');
      },
      err=>{
        console.error('Código del error desde el backend '+err.status);
        console.error(err.error.errors);
      }
    )
  }

}
