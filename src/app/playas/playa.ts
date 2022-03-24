import { Municipio } from "../municipios/municipio";


export class Playa{
  id!:number;
  nombre!:string;
  oleaje!:string;
  longitud!:string;
  tipo!:number;
  createdAt!:string;
  imagen!:string;
  municipio!:Municipio;
}
