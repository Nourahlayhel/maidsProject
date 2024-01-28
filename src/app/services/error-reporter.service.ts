import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorReporterService {
  private errorSource = new BehaviorSubject<boolean>(false);
  error$ = this.errorSource.asObservable();

  constructor() {}

  hideErrorMessage() {
    this.errorSource.next(false);
  }

  showErrorMessage() {
    this.errorSource.next(true);
  }
}
