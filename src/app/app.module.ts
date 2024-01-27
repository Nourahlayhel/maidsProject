import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { searchReducer } from './header/searchState/search.reducer';
import { BusyInterceptor } from './interceptors/busy.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserEffects } from './state/user.effects';
import { userReducer } from './state/user.reducer';
import { UsersWrapperModule } from './users-wrapper/users-wrapper.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UsersWrapperModule,
    InfiniteScrollModule,
    SpinnerComponent,
    StoreModule.forRoot({ user: userReducer, search: searchReducer }),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BusyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
