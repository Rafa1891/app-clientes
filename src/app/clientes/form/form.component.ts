import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  titulo:string="Nuevo Cliente";

  cliente:Cliente=new Cliente();

  constructor() { }

  ngOnInit(): void {
  }

  create():void{
    console.log("formulario enviado");
    console.log(this.cliente);
  }

}
