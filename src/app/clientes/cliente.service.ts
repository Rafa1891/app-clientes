import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlEndPoint:string="http://localhost:8087/api/clientes";
  constructor(private http:HttpClient) { }
/*
  getClientes():Observable<Cliente[]>{
    return of(CLIENTES);
  }
  */
  getClientes():Observable<Cliente[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=> response as Cliente[])
    )
  }
}
