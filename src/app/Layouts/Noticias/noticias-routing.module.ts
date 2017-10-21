import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NoticiasComponent } from './noticias.component';
import { NoticiasDetalleComponent } from './noticiasDetalle.component';

const routes: Routes = [
  { path: '', component: NoticiasComponent },
  { path: ':id', component: NoticiasDetalleComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class NoticiasRoutingModule { }
