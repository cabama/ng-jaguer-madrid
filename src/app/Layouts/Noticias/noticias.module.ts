import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { NoticiasRoutingModule } from './noticias-routing.module';
// Floating button
import { ng2mfbModule } from 'app/Componentes/ng-floating-button';
// Components
import { NoticiasComponent } from './noticias.component';
import { NoticiasDetalleComponent } from './noticiasDetalle.component';
import { CardNoticiaComponent } from '../../Componentes/cardNoticia.component';



@NgModule({
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    ng2mfbModule
  ],
  declarations: [NoticiasComponent, NoticiasDetalleComponent, CardNoticiaComponent]
})
export class NoticiasModule { }
