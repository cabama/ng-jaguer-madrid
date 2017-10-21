import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, LoadChildren } from '@angular/router';
import { NoticiasComponent } from '../Layouts/Noticias/noticias.component';
import { CalendarioComponent } from '../Layouts/Calendario/calendario.component';
import { PlantillaComponent } from '../Layouts/Plantilla/plantilla.component';
import { NoticiasModule } from '../Layouts/Noticias/noticias.module';


const appRoutes: Routes = [
  { path: '',  redirectTo: '/Calendario', pathMatch: 'full' },
  // { path: 'Noticias', loadChildren: () => NoticiasModule },
  { path: 'Calendario', component: CalendarioComponent },
  { path: 'Plantilla', component: PlantillaComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });
