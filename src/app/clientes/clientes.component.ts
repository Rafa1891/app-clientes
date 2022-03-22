import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  clientes!:Cliente[];
  constructor(private servicioCliente:ClienteService) { }

  ngOnInit(): void {
    this.servicioCliente.getClientes().subscribe(
      resp=>this.clientes=resp
    );
  }

  borrarCliente(){
    confirm("Va a eliminar un cliente.¿Está seguro de eliminarlo?");
  }



}
