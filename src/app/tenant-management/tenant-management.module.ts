import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantManagementComponent } from './tenant-management.component';
import { TenantSearchComponent } from './tenant-search/tenant-search.component';
import { TenantCardComponent } from './tenant-card/tenant-card.component';
import { FormsModule } from '@angular/forms';
import { TenantEditComponent } from './tenant-edit/tenant-edit.component';
import { TENANT_MANAGEMENT_ROUTES } from './tenant-management.routes';
import { RouterModule } from '@angular/router';
import { TenantService } from './tenant.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(TENANT_MANAGEMENT_ROUTES)
  ],
  declarations: [
    TenantManagementComponent,
    TenantSearchComponent,
    TenantCardComponent,
    TenantEditComponent
  ],
  providers: [
    TenantService
  ],
  exports: [
    TenantSearchComponent
  ]
})
export class TenantManagementModule { }
