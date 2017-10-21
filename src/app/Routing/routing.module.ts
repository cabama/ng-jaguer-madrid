import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, LoadChildren } from '@angular/router';
import { NoticiasComponent } from '../Layouts/Noticias/noticias.component';
import { CalendarioComponent } from '../Layouts/Calendario/calendario.component';
import { PlantillaComponent } from '../Layouts/Plantilla/plantilla.component';
import { CommonModule } from '@angular/common';


const appRoutes: Routes = [
  { path: '',  redirectTo: '/Calendario', pathMatch: 'full' },
  { path: 'Noticias', loadChildren: '../Layouts/Noticias/noticias.module#NoticiasModule'},
  { path: 'Calendario', component: CalendarioComponent },
  { path: 'Plantilla', component: PlantillaComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }