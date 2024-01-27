import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const loadAnimation = trigger('load', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate('2s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
