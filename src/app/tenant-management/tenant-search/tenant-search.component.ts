import { Component, OnInit } from '@angular/core';
import { TenantService } from '../tenant.service';
import { Tenant } from '../../entities/tenant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-search',
  templateUrl: './tenant-search.component.html',
  styleUrls: ['./tenant-search.component.css'],
  providers: [TenantService]
})
export class TenantSearchComponent implements OnInit {

  name: string = '';

  tenants: Tenant[] = [];

  selectedTenant: Tenant;

  constructor(private tenantService: TenantService, private router: Router) { }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.tenantService
      .find(this.name)
      .subscribe(
        (tenants) => {
          this.tenants = tenants;
        },
        (errResp) => {
          console.error('Error loading tenants', errResp);
        }
      );
  }

  select(t: Tenant): void {
    this.selectedTenant = t;
  }

  new(): void {
    this.router.navigate(['/tenants/new']);
  }

  deleteTenant(tenant_id: string): void {
    this.tenantService
    .delete(tenant_id)
    .subscribe(
      (success) => {
        for (let i = 0; i < this.tenants.length; i++) {
          if (this.tenants[i]._id === tenant_id) {
            this.tenants.splice(i, 1);
            break;
          }
        }
      },
      (errResp) => {
        console.error('Error deleting invoice', errResp);
      }
    );
  }

  delete(event) {
    this.deleteTenant(event);
  }
}
