import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementComponent } from "./element/element.component";
import { PlaceHolderComponent } from './place-holder/place-holder.component';



@NgModule({
  declarations: [ElementComponent, PlaceHolderComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [
    ElementComponent
  ]
})
export class ElementsModule { }
