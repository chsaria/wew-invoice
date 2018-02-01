import { Tenant } from './../../entities/tenant';
import { Position } from './../../entities/position';
import { PositionSearchComponent } from './../position-search/position-search.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.css']
})
export class PositionEditComponent implements OnInit {
  id: string;
  position: Position = {
    _id: '',
    Short: '',
    Name: '',
    NetDefaultPrice: 0,
    TaxPercentage: 0,
    DefaultCount: 0,
    Unit: '',
    Tenant: null,
    CreatedAtUtc: null,
    ModifiedAtUtc: null
  };
  errors: string;

  constructor(private positionService: PositionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];

        if (this.id === '') {
          return;
        } else if (this.id === 'new') {
        } else {
          this.positionService.findById(this.id).subscribe(
            position => { this.position = position; this.errors = ''; },
            error => { this.errors = 'Error loading position'; }
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
    this.positionService.create(this.position).subscribe(
      position => {
        this.position = position;
        this.errors = 'Creating was successful!';
        this.router.navigate(['/positions']);
      },
      err => {
        this.errors = 'Error saving position';
      }
    );
  }

  update() {
    this.positionService.update(this.position).subscribe(
      position => {
        this.position = position;
        this.errors = 'Updating was successful!';
        this.router.navigate(['/positions']);
      },
      err => {
        this.errors = 'Error saving position';
      }
    );
  }
}
