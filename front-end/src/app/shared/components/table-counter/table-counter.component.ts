import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-counter',
  templateUrl: './table-counter.component.html',
  styleUrls: ['./table-counter.component.css'],
})
export class TableCounterComponent implements OnInit {
  @Input() length: number;

  constructor() {}

  ngOnInit(): void {}
}
