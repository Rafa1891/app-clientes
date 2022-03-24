import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Municipio } from '../municipios/municipio';
import { AuthService } from '../usuarios/auth.service';
import { Playa } from './playa';



@Injectable({
  providedIn: 'root'
})
export class PlayaService {

  urlEndPoint:string="http://localhost:8087/api/playas";
  urlEndPoint2:string="http://localhost:8087/api/playa";

  constructor(private http:HttpClient,private authService:AuthService) { }

httpHeaders=new HttpHeaders({'Content-Type':'application/json'});

agregarAuthorizationHeader(){
let token =this.authService.token;

if(token!=null){
  return this.httpHeaders.append('Authorization','Bearer '+token);
}
return this.httpHeaders;
}


  getPlayas():Observable<Playa[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=> response as Playa[])
    )
  }
//insertar playas
  create(playa: Playa):Observable<Playa>{

    return this.http.post<Playa>(this.urlEndPoint2,playa,{ headers: this.agregarAuthorizationHeader() });

  }
//buscar por id
  getPlaya(id:number):Observable<Playa>{
    return this.http.get<Playa>(`${this.urlEndPoint}/${id}`,{headers: this.agregarAuthorizationHeader()});
  }

  //actualizar playa
  update(playa: Playa):Observable<Playa>{
    return this.http.put<Playa>(`${this.urlEndPoint2}/${playa.id}`,playa,{headers: this.agregarAuthorizationHeader()});
  }
//eliminar playa
  delete(id:number):Observable<Playa>{
    return this.http.delete<Playa>(`${this.urlEndPoint2}/${id}`,{headers: this.agregarAuthorizationHeader()});
}

//mostrar municipios
getMunicipios():Observable<Municipio[]>{
  return this.http.get<Municipio[]>(this.urlEndPoint+"/municipios",
  {headers: this.agregarAuthorizationHeader()});// Tambíen vale `${this.urlEndPoint}/municipios`
}

subirImagen(archivo:File,id:any):Observable<HttpEvent<any>>{
  let formData=new FormData();

  formData.append("archivo",archivo);
  formData.append("id",id);

  let httpHeaders=new HttpHeaders();

  let token=this.authService.token;

  if(token !=null){
    httpHeaders=httpHeaders.append('Authorization','Bearer '+token);
  }

  const req=new HttpRequest('POST',`${this.urlEndPoint2}/subida`,formData,{headers:httpHeaders});

  return this.http.request(req).pipe(
    resp=>resp
  );

}
}
