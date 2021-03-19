import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private matSnackbar: MatSnackBar) {}

  openErrorSnackbar(message: string): void {
    message = !!message ? message.toUpperCase() : null;
    this.matSnackbar.open(message, 'X', { duration: 4000, panelClass: ['error-snackbar'] });
  }

  openSuccessSnackbar(message: string): void {
    message = !!message ? message.toUpperCase() : null;
    this.matSnackbar.open(message, 'X', { duration: 3000, panelClass: ['success-snackbar'] });
  }

  openDefaultSnackbar(message: string): void {
    message = !!message ? message.toUpperCase() : null;
    this.matSnackbar.open(message, 'X', { duration: 3000 });
  }

}
