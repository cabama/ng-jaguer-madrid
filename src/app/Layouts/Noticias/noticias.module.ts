import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
// Componentes
import { NoticiasComponent } from './noticias.component';
import { NoticiasDetalleComponent } from './noticiasDetalle.component';
import { CardNoticiaComponent } from '../../Componentes/cardNoticia.component';


// Module routes
export const routes: Route[] = [
  { path: '/', component: NoticiasComponent },
  { path: ':id', component: NoticiasDetalleComponent }
  /*() => System.import('./publisher').then(({PublisherModule}) => PublisherModule) */
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    NoticiasComponent,
    NoticiasDetalleComponent,
    CardNoticiaComponent
  ],
})
export class NoticiasModule {}
