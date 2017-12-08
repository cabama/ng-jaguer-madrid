import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Routing
import { NoticiasRoutingModule } from './noticias-routing.module';
// Floating button
import { ng2mfbModule } from 'app/Componentes/ng-floating-button';
// Components
import { CardNoticiaComponent } from '../../Componentes/cardNoticia.component';
import { NoticiasComponent } from './Components/noticias/noticias.component';
import { NoticiasDetalleComponent } from './Components/noticiaDetallada/noticiasDetalle.component';
import { NewNewsComponent } from 'app/Layouts/Noticias/Components/addnoticia/newNoticia.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    NoticiasRoutingModule,
    ng2mfbModule
  ],
  declarations: [
    NoticiasComponent,
    NoticiasDetalleComponent,
    NewNewsComponent,
    CardNoticiaComponent
  ]
})
export class NoticiasModule { }
