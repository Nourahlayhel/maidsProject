import {
  trigger,
  style,
  animate,
  transition,
  state,
} from '@angular/animations';

export const hoverGrowAnimation = trigger('hoverGrow', [
  state('normal', style({ transform: 'scale(1)' })), // initial state
  state('hovered', style({ transform: 'scale(1.2)' })), // final state on hover
  transition('normal => hovered', animate('0.5s ease-out')),
  transition('hovered => normal', animate('0.5s ease-in')),
]);
