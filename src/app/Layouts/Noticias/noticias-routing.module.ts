import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './Components/noticias/noticias.component';
import { NoticiasDetalleComponent } from './Components/noticiaDetallada/noticiasDetalle.component';
import { NewNewsComponent } from './Components/addnoticia/newNoticia.component';


const routes: Routes = [
  { path: '', component: NoticiasComponent },
  { path: 'Details/:id', component: NoticiasDetalleComponent },
  { path: 'New', component: NewNewsComponent },
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
