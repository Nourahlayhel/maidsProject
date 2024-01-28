import { Component } from '@angular/core';
import { ErrorReporterService } from './services/error-reporter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public errorReporterService: ErrorReporterService) {}
  title = 'MaidsApp';
}
