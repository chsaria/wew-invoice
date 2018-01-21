import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
