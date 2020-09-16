import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionComponent } from './collection/collection.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports: [
    CollectionComponent
  ]
})
export class CollectionsModule { }
