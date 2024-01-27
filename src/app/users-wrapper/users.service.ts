import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { User } from '../models/User';
import { loadUsers, loadUsersSuccess } from '../state/user.action';
import { UserState } from '../state/user.state';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly baseUrl = environment.usersUrl;
  constructor(
    private httpClient: HttpClient,
    private store: Store<UserState>
  ) {}
  usersSource = new BehaviorSubject<User[]>([]);
  currentPageSource = new BehaviorSubject<number>(0);
  totalPagesSource = new BehaviorSubject<number>(0);

  users$ = this.usersSource.asObservable();
  currentPage$ = this.currentPageSource.asObservable();
  totalPages$ = this.totalPagesSource.asObservable();

  currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$: Observable<any> = this.currentUserSource.asObservable();

  totalPages: number = 0;
  currentPage: number = 1;

  get users(): User[] {
    return this.usersSource.value;
  }

  set users(usersData: User[]) {
    this.usersSource.next(usersData);
  }

  updateUserState(userState: UserState) {
    this.usersSource.next(userState.users);
    this.currentPageSource.next(userState.currentPage);
    this.totalPagesSource.next(userState.totalPages);
  }

  getUsersPaginated(pageNumber: number) {
    const params = new HttpParams().set('page', pageNumber.toString());
    return this.httpClient.get(this.baseUrl, { params }).pipe(take(1));
  }

  getUserInfo(userId: number) {
    return this.httpClient.get(this.baseUrl + `/${userId}`).pipe(
      take(1),
      tap((userData: any) => {
        let { data } = userData;
        this.currentUserSource.next(data);
      })
    );
  }
}
