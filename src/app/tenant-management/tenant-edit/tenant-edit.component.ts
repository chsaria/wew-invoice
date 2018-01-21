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
  tenant: Tenant;
  errors: string;

  constructor(private tenantService: TenantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log('1');
        this.id = params['id'];

        console.log('2');

        if (this.id === '') {
          console.log('3');
          return;
        } else if (this.id === 'new') {
          console.log('4');
          this.tenant = {
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
          console.log('5');
        } else {
          console.log('6');
          this.tenantService.findById(this.id).subscribe(
            tenant => { console.log('7'); this.tenant = tenant; this.errors = ''; },
            error => { console.log('8'); this.errors = 'Error loading tenant'; }
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
      },
      err => {
        this.errors = 'Error saving tenant';
      }
    );
  }
}
