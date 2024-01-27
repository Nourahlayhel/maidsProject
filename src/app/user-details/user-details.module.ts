import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [UserDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [UserDetailsComponent],
})
export class UserDetailsModule {}
