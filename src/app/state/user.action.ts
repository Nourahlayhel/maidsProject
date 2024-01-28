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

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

export const selectUser = createAction(
  '[User] Select User',
  props<{ userId: number }>()
);
export const loadUser = createAction(
  '[User] Load User',
  props<{ selectedUser: User | null }>()
);

export const setLoading = createAction(
  '[User] Set Loading',
  props<{ loading: boolean }>()
);
