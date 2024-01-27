import { createAction, props } from '@ngrx/store';
import { User } from '../models/User';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ page: number }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[]; totalPages: number; currentPage: number }>()
);
export const selectUser = createAction(
  '[User] Select User',
  props<{ userId: string }>()
);
export const navigateBack = createAction('[User] Navigate Back');
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
export const setLoading = createAction(
  '[User] Set Loading',
  props<{ loading: boolean }>()
);
export const search = createAction(
  '[User] search',
  props<{ searchText: string }>()
);
