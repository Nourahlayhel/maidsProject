import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users-wrapper/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.usersService.currentUserSource.value) {
      let currentUserId = this.route.snapshot.paramMap.get('id');
      if (currentUserId)
        this.usersService.getUserInfo(+currentUserId).subscribe();
    }
  }
  goBack() {
    this.router.navigateByUrl('/');
  }
}
