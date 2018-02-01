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

  deletePosition(position_id: string): void {
    this.positionService
    .delete(position_id)
    .subscribe(
      (success) => {
        for (let i = 0; i < this.positions.length; i++) {
          if (this.positions[i]._id === position_id) {
            this.positions.splice(i, 1);
            break;
          }
        }
      },
      (errResp) => {
        console.error('Error deleting position', errResp);
      }
    );
  }

  delete(event) {
    this.deletePosition(event);
  }
}
