import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './Routing/routing.module';

import { AppComponent } from './app.component';
import { NoticiasComponent } from './Layouts/Noticias/noticias.component';
import { CalendarioComponent } from './Layouts/Calendario/calendario.component';
import { PlantillaComponent } from './Layouts/Plantilla/plantilla.component';
import { CardNoticiaComponent } from './Componentes/cardNoticia.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    PlantillaComponent,
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
