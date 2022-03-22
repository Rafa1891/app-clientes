import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

private _usuario!:Usuario;
private _token!:string;



  constructor(private http:HttpClient) { }

  public get usuario():Usuario{
    if(this._usuario!=null){
      return this._usuario;
    }else if(this._usuario==null && sessionStorage.getItem('usuario') !=null){
    this._usuario=JSON.parse(sessionStorage.getItem('usuario') || '{}')as Usuario;
  }
  return new Usuario;
}

login(usuario:Usuario):Observable<any>{
  const urlEndPoint="http://localhost:8087/oauth/token";
  const credenciales=btoa('angularapp'+':'+'12345');

  const httpHeaders=new HttpHeaders({
    'Content-Type':'application/x-www-form-urlencoded',
    'Authorization':'Basic '+credenciales
  });

  let params=new URLSearchParams();
  params.set('grant_type','password');
  params.set('username',usuario.username);
  params.set('password',usuario.password);

  console.log(params.toString());

  return this.http.post<any>(urlEndPoint,params.toString(),{headers:httpHeaders});


}
}
