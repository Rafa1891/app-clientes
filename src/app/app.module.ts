import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './rutas/app-routing.module';
import { AppComponent } from './app.component';
import { PlayaService } from './playas/playa.service';
import { PlayasModule } from './playas/playas.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from './usuarios/auth.service';
import { MunicipiosModule } from './municipios/municipios.module';
import { MunicipioService } from './municipios/municipio.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayasModule,
    MunicipiosModule,
    FooterModule,
    HeaderModule,
    UsuariosModule,
    HttpClientModule
  ],
  providers: [
    PlayaService,
    MunicipioService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
