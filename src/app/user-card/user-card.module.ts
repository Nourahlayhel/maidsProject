import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { HighlighterPipe } from '../pipes/highlighter.pipe';

@NgModule({
  declarations: [UserCardComponent],
  imports: [CommonModule, HighlighterPipe],
  exports: [UserCardComponent],
})
export class UserCardModule {}
