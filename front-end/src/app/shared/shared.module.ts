import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { TableCounterComponent } from './components/table-counter/table-counter.component';

@NgModule({
  declarations: [TableCounterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TableCounterComponent],
})
export class SharedModule {}
