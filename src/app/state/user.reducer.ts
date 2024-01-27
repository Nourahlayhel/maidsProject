// user.reducer.ts

import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.action';
import { UserState } from './user.state';

export const initialState: UserState = {
  users: [],
  selectedUserId: null,
  currentPage: 0,
  totalPages: 0,
  loading: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(
    UserActions.loadUsersSuccess,
    (state, { users, totalPages, currentPage }) => ({
      ...state,
      users: [...state.users, ...users],
      totalPages,
      currentPage,
      loading: false,
    })
  ),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
