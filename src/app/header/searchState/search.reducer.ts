import { Action, createReducer, on } from '@ngrx/store';
import { SearchState } from './search.state';

import * as SearchActions from './search.action';
export const initialState: SearchState = {
  searchKey: '',
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.search, (state, { searchKey }) => ({
    ...state,
    searchKey,
  }))
);

export function reducer(state: SearchState | undefined, action: Action) {
  return searchReducer(state, action);
}
