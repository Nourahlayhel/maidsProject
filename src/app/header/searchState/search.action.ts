import { createAction, props } from '@ngrx/store';
export const search = createAction(
  '[User] search',
  props<{ searchKey: string }>()
);
