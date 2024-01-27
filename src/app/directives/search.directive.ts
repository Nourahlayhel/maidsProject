import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';

@Directive({
  selector: '[appSearch]',
  standalone: true,
})
export class SearchDirective implements OnChanges {
  @Input() appSearch: string | null = '';
  constructor(private userCard: UserCardComponent) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (
      this.appSearch?.length &&
      this.userCard.user &&
      !this.userCard.user.id.toString().includes(this.appSearch)
    ) {
      this.userCard.hide();
    } else {
      this.userCard.show();
    }
  }
}
