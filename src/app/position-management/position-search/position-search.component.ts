import { Position } from './../../entities/position';
import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-position-search',
  templateUrl: './position-search.component.html',
  styleUrls: ['./position-search.component.css']
})
export class PositionSearchComponent implements OnInit {

  name: string = '';

  positions: Position[] = [];

  selectedPosition: Position;

  constructor(private positionService: PositionService, private router: Router) { }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.positionService
      .find(this.name)
      .subscribe(
        (positions) => {
          this.positions = positions;
        },
        (errResp) => {
          console.error('Error loading positions', errResp);
        }
      );
  }

  select(p: Position): void {
    this.selectedPosition = p;
  }

  new(): void {
    this.router.navigate(['/positions/new']);
  }
}
