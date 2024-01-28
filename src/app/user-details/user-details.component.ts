import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { User } from '../models/User';
import { selectUser } from '../state/user.action';
import { UserState } from '../state/user.state';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user$ = this.store.pipe(select('user', 'selectedUser'));
  loading$ = this.store.pipe(select('user', 'loading'));

  user: User | null = null;
  constructor(
    private store: Store<{ user: UserState }>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.user = user;
    });
    let currentUserId = this.route.snapshot.paramMap.get('id');
    if (currentUserId) {
      if (!this.user || (this.user && this.user.id !== +currentUserId)) {
        this.store.dispatch(selectUser({ userId: +currentUserId }));
      }
    }
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
