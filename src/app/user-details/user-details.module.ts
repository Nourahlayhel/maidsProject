import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { UserCardModule } from '../user-card/user-card.module';
import { HeaderModule } from '../header/header.module';
import { SpinnerComponent } from '../spinner/spinner.component';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    UserCardModule,
    HeaderModule,
    SpinnerComponent,
    RouterModule.forChild(routes),
  ],
  exports: [UserDetailsComponent],
})
export class UserDetailsModule {}
