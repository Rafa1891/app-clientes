import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Municipio } from '../municipio';
import { MunicipioService } from '../municipio.service';

@Component({
  selector: 'app-verMunicipio',
  templateUrl: './verMunicipio.component.html',
  styles: [
  ]
})
export class VerMunicipioComponent implements OnInit {

  titulo:string="Ver municipio";
  municipio!:Municipio;



  constructor(private municipioService:MunicipioService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {


    this.activatedRoute.paramMap.subscribe(
      params=>{
        let id:number =+params.get('id')!;

        if(id){
          this.municipioService.getMunicipio(id).subscribe(resp=> this.municipio=resp);
        }
      }
    );
  }



}
