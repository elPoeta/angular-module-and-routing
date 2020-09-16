import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewComponent } from './view/view.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ViewComponent, StatisticsComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ],
  exports: [
    ViewComponent
  ]
})
export class ViewsModule { }
