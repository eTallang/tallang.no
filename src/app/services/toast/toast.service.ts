import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class ToastService {

  constructor(private snackBar: MdSnackBar) { }

  showMessage(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 10000
    });
  }
}
