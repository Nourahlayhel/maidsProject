import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./users-wrapper/users-wrapper.module').then(
        (m) => m.UsersWrapperModule
      ),
  },
  {
    path: ':id',
    pathMatch: 'full',
    loadChildren: () =>
      import('./user-details/user-details.module').then(
        (m) => m.UserDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
