import { Position } from './../../entities/position';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-position-card',
  templateUrl: './position-card.component.html',
  styleUrls: ['./position-card.component.css']
})
export class PositionCardComponent implements OnInit {

  constructor() { }

  @Input() item: Position;

  ngOnInit() {
  }

}
