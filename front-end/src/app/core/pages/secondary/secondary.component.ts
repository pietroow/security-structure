import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css'],
})
export class SecondaryComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goto() {
    this.router.navigate(['main']);
  }
}
