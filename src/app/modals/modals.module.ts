import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalsRoutingModule } from './modals-routing.module';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    ModalsRoutingModule
  ]
})
export class ModalsModule { }
