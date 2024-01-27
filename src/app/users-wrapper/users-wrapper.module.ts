import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersWrapperComponent } from './users-wrapper.component';
import { UserCardModule } from '../user-card/user-card.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule, Routes } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
const routes: Routes = [
  {
    path: '',
    component: UsersWrapperComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [UsersWrapperComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserCardModule,
    InfiniteScrollModule,
    SpinnerComponent,
    HeaderModule,
    RouterModule.forChild(routes),
  ],
  exports: [UsersWrapperComponent],
})
export class UsersWrapperModule {}
