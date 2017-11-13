import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, LoadChildren } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from '../Layouts/Noticias/noticias.component';
import { CalendarioComponent } from '../Layouts/Calendario/calendario.component';
import { PlantillaComponent } from '../Layouts/Plantilla/plantilla.component';
import { LoginComponent } from 'app/Layouts/Login/login.component';


const appRoutes: Routes = [
  { path: '',  redirectTo: '/Noticias', pathMatch: 'full' },
  { path: 'Noticias', loadChildren: '../Layouts/Noticias/noticias.module#NoticiasModule'},
  { path: 'Calendario', component: CalendarioComponent },
  { path: 'Plantilla', component: PlantillaComponent },
  { path: 'Login', component: LoginComponent }
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