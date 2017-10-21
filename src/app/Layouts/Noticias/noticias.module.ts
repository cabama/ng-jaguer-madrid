import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { NoticiasRoutingModule } from './noticias-routing.module';

// Components
import { NoticiasComponent } from './noticias.component';
import { NoticiasDetalleComponent } from './noticiasDetalle.component';
import { CardNoticiaComponent } from '../../Componentes/cardNoticia.component';



@NgModule({
  imports: [
    CommonModule,
    NoticiasRoutingModule
  ],
  declarations: [NoticiasComponent, NoticiasDetalleComponent, CardNoticiaComponent]
})
export class NoticiasModule { }
