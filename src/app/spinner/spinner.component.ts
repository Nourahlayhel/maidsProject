import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() width = '50px';
  @Input() height = '50px';
}
