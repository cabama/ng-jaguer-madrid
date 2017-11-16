import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './Routing/routing.module';

import { AppComponent } from './app.component';
import { NoticiasComponent } from './Layouts/Noticias/noticias.component';
import { CalendarioComponent } from './Layouts/Calendario/calendario.component';
import { PlantillaComponent } from './Layouts/Plantilla/plantilla.component';
import { LoginComponent } from './Layouts/Login/login.component';
import { CardNoticiaComponent } from './Componentes/cardNoticia.component';
import { cardPartidoComponent } from './Componentes/cardPartido.component';
import { JDMComponent } from './Layouts/JDM/jdm.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    PlantillaComponent,
    JDMComponent,
    LoginComponent,
    cardPartidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
