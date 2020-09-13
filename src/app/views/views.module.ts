import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],
  exports: [
    ViewComponent
  ]
})
export class ViewsModule { }
