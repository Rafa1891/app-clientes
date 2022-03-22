import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  titulo:string="Login";
  usuario:Usuario=new Usuario();

  constructor(private authService:AuthService) { }

  ngOnInit():void {

  }
  login():void{
    console.log(this.usuario);
    this.authService.login(this.usuario).subscribe(
      resp=>{
        console.log(resp);
      },
      err=>{
        console.log(err);
      }
    );

  }

}
