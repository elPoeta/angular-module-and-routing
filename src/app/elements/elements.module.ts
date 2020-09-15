import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementComponent } from "./element/element.component";
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ElementComponent, PlaceHolderComponent, TimesDirective],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports: [
    ElementComponent
  ]
})
export class ElementsModule { }
