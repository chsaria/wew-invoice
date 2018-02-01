
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PositionManagementComponent } from './position-management.component';
import { PositionCardComponent } from './position-card/position-card.component';
import { PositionEditComponent } from './position-edit/position-edit.component';
import { PositionSearchComponent } from './position-search/position-search.component';
import { PositionService } from './position.service';
import { POSITION_MANAGEMENT_ROUTES } from './position-management.routes';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(POSITION_MANAGEMENT_ROUTES)
],
  declarations: [
    PositionManagementComponent,
    PositionCardComponent,
    PositionEditComponent,
    PositionSearchComponent
],
  providers: [
    PositionService
],
  exports: [
    PositionSearchComponent
]
})
export class PositionManagementModule { }
