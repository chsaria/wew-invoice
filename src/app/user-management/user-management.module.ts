import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserManagementComponent,
    UserSearchComponent
  ],
  exports: [
    UserSearchComponent
  ]
})
export class UserManagementModule { }
