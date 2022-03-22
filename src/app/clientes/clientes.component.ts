import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from '../usuarios/auth.service';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  imagenSrc!:string;
  clientes!:Cliente[];
  constructor(private servicioCliente:ClienteService, public authService:AuthService) { }

  ngOnInit(): void {

    this.imagenSrc='assets/avatar.png';
    this.servicioCliente.getClientes().subscribe(
      resp=>this.clientes=resp
    );
  }

  delete(cliente:Cliente):void{
    swal({
      title:'Está seguro?',
      text:`Seguro que desea eliminar al cliente ${cliente.nombre}  ${cliente.apellido}`,
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
          this.servicioCliente.delete(cliente.id).subscribe(
            resp=>{
              this.clientes=this.clientes.filter(cli => cli !== cliente)
              swal('Cliente eliminado',`Cliente ${cliente.nombre} eliminado con éxito`,'success');
            }
          )
        }
      }
      );



    }
  }




