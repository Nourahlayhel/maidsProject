import { Component, EventEmitter, Input, Output } from '@angular/core';
import { hoverGrowAnimation } from '../animations/hover-animation';
import { loadAnimation } from '../animations/load-animation';
import { User } from '../models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  animations: [hoverGrowAnimation, loadAnimation],
})
export class UserCardComponent {
  @Input() user: User | null = null;
  @Input() showDetails: boolean = false;
  @Input() searchKey: string | null = '';
  @Output('clicked') clickEmitter = new EventEmitter();

  displayCard: boolean = true;
  state: 'normal' | 'hovered' = 'normal';

  onMouseEnter() {
    this.state = 'hovered';
  }

  onMouseLeave() {
    this.state = 'normal';
  }

  emitClick() {
    this.clickEmitter.emit();
  }

  hide() {
    this.displayCard = false;
  }

  show() {
    this.displayCard = true;
  }
}
