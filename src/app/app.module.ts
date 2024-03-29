import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule, RoutingComponents } from './Routing/routing.module';
// Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ng2mfbModule } from './Componentes/ng-floating-button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule, MatFormField, MatFormFieldModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
// Our components
import { AppComponent } from './app.component';
import { CalendarioComponent } from './Layouts/Calendario/calendario.component';
import { PlantillaComponent } from './Layouts/Plantilla/plantilla.component';
import { CardNoticiaComponent } from './Componentes/cardNoticia.component';
import { CardPartidoComponent } from './Componentes/cardPartido.component';
import { JDMComponent } from './Layouts/JDM/jdm.component';
import { BrowserAnimationBuilder } from '@angular/platform-browser/animations/src/animation_builder';
import { SharedService } from './Services/share.service';
import { AuthService } from 'app/Services/auth.service';
import { UserService } from 'app/Services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    JDMComponent,
    CardPartidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ng2mfbModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [UserService, SharedService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
