import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { loadAnimation } from '../animations/load-animation';
import { loadUsers, search } from '../state/user.action';
import { UserState } from '../state/user.state';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users-wrapper',
  templateUrl: './users-wrapper.component.html',
  styleUrls: ['./users-wrapper.component.scss'],
  animations: [loadAnimation],
})
export class UsersWrapperComponent implements OnInit {
  searchBoxOpened: boolean = false;
  searchText: string = '';
  loadingData$ = this.store.pipe(select('user', 'loading'));
  searchKey$ = this.store.pipe(select('user', 'searchkey'));

  constructor(
    public usersService: UsersService,
    private router: Router,
    private store: Store<{ user: UserState }>
  ) {}

  ngOnInit() {
    this.store.pipe(select('user')).subscribe((userState) => {
      if (!userState.users.length) {
        this.loadUsers(1);
      }
      this.usersService.updateUserState(userState);
    });
  }

  loadUsers(page: number) {
    this.store.dispatch(loadUsers({ page }));
  }

  search(searchText: string) {
    this.store.dispatch(search({ searchText }));
  }

  paginate() {
    let currentPageValue: number = this.usersService.currentPageSource.value;
    let totalPagesValue = this.usersService.totalPagesSource.value;
    if (currentPageValue < totalPagesValue) {
      this.loadUsers(currentPageValue + 1);
    }
  }

  navigate(userId: number) {
    console.log(userId);

    this.usersService.getUserInfo(userId).subscribe(() => {
      this.router.navigateByUrl(`/${userId}`);
    });
  }
}
