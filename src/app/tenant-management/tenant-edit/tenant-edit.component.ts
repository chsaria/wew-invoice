import { TenantSearchComponent } from './../tenant-search/tenant-search.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tenant } from '../../entities/tenant';
import { TenantService } from '../tenant.service';

@Component({
  selector: 'app-tenant-edit',
  templateUrl: './tenant-edit.component.html',
  styleUrls: ['./tenant-edit.component.css']
})
export class TenantEditComponent implements OnInit {

  id: string;
  tenant: Tenant = {
    _id: '',
    Name: '',
    Address1: '',
    Address2: '',
    Address3: '',
    Zipcode: '',
    City: '',
    Phonenumber: '',
    TaxIdentificationNumber: '',
    InvoiceNumberScheme: '',
    LogoUrl: '',
    IBAN: '',
    BIC: '',
    CreatedAtUtc: null,
    ModifiedAtUtc: null
  };

  errors: string;

  constructor(private tenantService: TenantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];

        if (this.id === '') {
          return;
        } else if (this.id === 'new') {
        } else {
          this.tenantService.findById(this.id).subscribe(
            tenant => { this.tenant = tenant; this.errors = ''; },
            error => { this.errors = 'Error loading tenant'; }
          );
        }
      }
    );
  }

  save() {
    if (this.id === 'new') {
      this.createNew();
    } else {
      this.update();
    }
  }

  createNew() {
    this.tenantService.create(this.tenant).subscribe(
      tenant => {
        this.tenant = tenant;
        this.errors = 'Creating was successful!';
        this.router.navigate(['/tenants']);
      },
      err => {
        this.errors = 'Error saving tenant';
      }
    );
  }

  update() {
    this.tenantService.update(this.tenant).subscribe(
      tenant => {
        this.tenant = tenant;
        this.errors = 'Updating was successful!';
        this.router.navigate(['/tenants']);
      },
      err => {
        this.errors = 'Error saving tenant';
      }
    );
  }
}
