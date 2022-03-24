import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { AuthService } from '../usuarios/auth.service';
import { Municipio } from './municipio';


@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  urlEndPoint:string="http://localhost:8087/api/municipios";
  urlEndPoint2:string="http://localhost:8087/api/municipio";

  constructor(private http:HttpClient,private authService:AuthService) { }

httpHeaders=new HttpHeaders({'Content-Type':'application/json'});

agregarAuthorizationHeader(){
let token =this.authService.token;

if(token!=null){
  return this.httpHeaders.append('Authorization','Bearer '+token);
}
return this.httpHeaders;
}



//insertar municipios
  create(municipio: Municipio):Observable<Municipio>{

    return this.http.post<Municipio>(this.urlEndPoint2,municipio,{ headers: this.agregarAuthorizationHeader() });

  }
//buscar por id
  getMunicipio(id:number):Observable<Municipio>{
    return this.http.get<Municipio>(`${this.urlEndPoint}/${id}`,{headers: this.agregarAuthorizationHeader()});
  }

  //actualizar municipio
  update(municipio: Municipio):Observable<Municipio>{
    return this.http.put<Municipio>(`${this.urlEndPoint2}/${municipio.id}`,municipio,{headers: this.agregarAuthorizationHeader()});
  }
//eliminar municipio
  delete(id:number):Observable<Municipio>{
    return this.http.delete<Municipio>(`${this.urlEndPoint2}/${id}`,{headers: this.agregarAuthorizationHeader()});
}

//mostrar municipios
getMunicipios():Observable<Municipio[]>{
  return this.http.get<Municipio[]>(this.urlEndPoint);// Tambíen vale `${this.urlEndPoint}/municipios`
}


}
