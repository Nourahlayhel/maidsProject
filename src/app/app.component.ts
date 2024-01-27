import { Component } from '@angular/core';
import { BusyService } from './services/busy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public busyService: BusyService) {}
  title = 'MaidsApp';
}
