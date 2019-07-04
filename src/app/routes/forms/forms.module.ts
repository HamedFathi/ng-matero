import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsRoutingModule } from './forms-routing.module';
import { ElementsComponent } from './elements/elements.component';

@NgModule({
  declarations: [ElementsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }