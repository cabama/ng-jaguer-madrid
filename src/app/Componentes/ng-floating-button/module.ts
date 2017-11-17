import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { NgFloatingButtonComponent } from './ng-floating-button.component';
import { MfbButtonComponent } from './mfb-button/mfb-button.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgFloatingButtonComponent,
    MfbButtonComponent
  ],

  exports: [NgFloatingButtonComponent]
})
export class ng2mfbModule { }
