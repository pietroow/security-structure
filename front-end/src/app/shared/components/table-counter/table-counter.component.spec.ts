import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCounterComponent } from './table-counter.component';

describe('TableCounterComponent', () => {
  let component: TableCounterComponent;
  let fixture: ComponentFixture<TableCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
