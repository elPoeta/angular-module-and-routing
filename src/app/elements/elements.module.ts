import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementComponent } from "./element/element.component";


@NgModule({
  declarations: [ElementComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [
    ElementComponent
  ]
})
export class ElementsModule { }
