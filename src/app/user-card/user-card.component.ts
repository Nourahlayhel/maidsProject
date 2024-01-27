import { Component, EventEmitter, Input, Output } from '@angular/core';
import { hoverGrowAnimation } from '../animations/hover-animation';
import { User } from '../models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  animations: [hoverGrowAnimation],
})
export class UserCardComponent {
  @Input() user: User | null = null;
  @Output('clicked') clickEmitter = new EventEmitter();

  state: 'normal' | 'hovered' = 'normal';

  onMouseEnter() {
    this.state = 'hovered';
  }

  onMouseLeave() {
    this.state = 'normal';
  }
  emitClick() {
    console.log('hi');

    this.clickEmitter.emit();
  }
}
