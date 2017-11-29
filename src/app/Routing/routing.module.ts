import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, LoadChildren, CanActivate } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from '../Layouts/Calendario/calendario.component';
import { PlantillaComponent } from '../Layouts/Plantilla/plantilla.component';
import { LoginComponent } from 'app/Layouts/Login/login.component';
import { JDMComponent } from 'app/Layouts/JDM/jdm.component';
import { AuthService } from 'app/Services/auth.service';

const appRoutes: Routes = [
  { path: '',  redirectTo: '/Noticias', pathMatch: 'full' },
  {
    path: 'Noticias',
    loadChildren: '../Layouts/Noticias/noticias.module#NoticiasModule',
  },
  { path: 'Calendario', component: CalendarioComponent },
  { path: 'JDM', component: JDMComponent },
  {
    path: 'Plantilla', component: PlantillaComponent, canActivate: [AuthService]
 },
  { path: 'Login', component: LoginComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class RoutingModule { }
