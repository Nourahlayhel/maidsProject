import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { SearchState } from '../header/searchState/search.state';
import { loadUsers } from '../state/user.action';
import { UserState } from '../state/user.state';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users-wrapper',
  templateUrl: './users-wrapper.component.html',
  styleUrls: ['./users-wrapper.component.scss'],
})
export class UsersWrapperComponent implements OnInit {
  searchBoxOpened: boolean = false;
  searchText: string = '';
  currentPage: number = 0;
  totalPages: number = 0;

  loadingData$ = this.store.pipe(select('user', 'loading'));
  users$ = this.store.pipe(select('user', 'users'));
  currentPage$ = this.store.pipe(select('user', 'currentPage'));
  totalPages$ = this.store.pipe(select('user', 'totalPages'));
  searchKey$ = this.searchStore.pipe(select('search', 'searchKey'));

  constructor(
    public usersService: UsersService,
    private router: Router,
    private store: Store<{ user: UserState }>,
    private searchStore: Store<{ search: SearchState }>
  ) {}

  ngOnInit() {
    this.currentPage$.subscribe((res) => {
      this.currentPage = res;
    });

    this.totalPages$.subscribe((res) => {
      this.totalPages = res;
    });

    this.users$.subscribe((users) => {
      if (!users.length) {
        this.loadUsers(1);
      }
    });
  }

  loadUsers(page: number) {
    this.store.dispatch(loadUsers({ page }));
  }

  paginate() {
    if (this.currentPage < this.totalPages) {
      this.loadUsers(this.currentPage + 1);
    }
  }

  navigate(userId: number) {
    this.router.navigateByUrl(`/${userId}`);
  }
}
