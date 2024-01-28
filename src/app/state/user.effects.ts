import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UsersService } from '../users-wrapper/users.service';
import * as UserActions from './user.action';
import { UserState } from './user.state';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      tap(() => this.store.dispatch(UserActions.setLoading({ loading: true }))),
      mergeMap(({ page }) =>
        this.userService.getUsersPaginated(page).pipe(
          map(({ data, total_pages, page: currentPage }: any) =>
            UserActions.loadUsersSuccess({
              users: data,
              totalPages: total_pages,
              currentPage,
            })
          ),
          catchError((error) => {
            this.store.dispatch(UserActions.loadUsersFailure({ error }));
            return EMPTY;
          }),
          tap(() =>
            this.store.dispatch(UserActions.setLoading({ loading: false }))
          )
        )
      )
    )
  );

  selectUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.selectUser),
      tap(() => {
        this.store.dispatch(UserActions.loadUser({ selectedUser: null }));
        this.store.dispatch(UserActions.setLoading({ loading: true }));
      }),
      mergeMap(({ userId }) =>
        this.userService.getUserInfo(userId).pipe(
          map(({ data }: any) => UserActions.loadUser({ selectedUser: data })),
          tap(() =>
            this.store.dispatch(UserActions.setLoading({ loading: false }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private userService: UsersService,
    private store: Store<UserState>
  ) {}
}
