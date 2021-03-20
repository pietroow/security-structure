import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ColorListDTO } from '../../DTOs/color-list-dto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  dataSource: MatTableDataSource<ColorListDTO>;
  displayedColumns = ['name', 'hex'];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goto() {
    this.router.navigate(['secondary']);
  }
}
