import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  private busySource = new BehaviorSubject<boolean>(false);
  busy$ = this.busySource.asObservable();

  constructor() {}

  idle() {
    this.busySource.next(false);
  }

  busy() {
    this.busySource.next(true);
  }
}
