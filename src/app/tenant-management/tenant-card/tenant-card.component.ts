import { Component, OnInit, Input } from '@angular/core';
import { Tenant } from '../../entities/tenant';

@Component({
  selector: 'app-tenant-card',
  templateUrl: './tenant-card.component.html',
  styleUrls: ['./tenant-card.component.css']
})
export class TenantCardComponent implements OnInit {

  constructor() { }

  @Input() item: Tenant;

  ngOnInit() {
  }

}
