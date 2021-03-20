import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SecondaryComponent } from './pages/secondary/secondary.component';

@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    SecondaryComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule, ReactiveFormsModule],
})
export class CoreModule {}
