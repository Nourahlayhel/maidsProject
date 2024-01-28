import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly baseUrl = environment.usersUrl;
  constructor(private httpClient: HttpClient) {}

  totalPages: number = 0;
  currentPage: number = 1;

  getUsersPaginated(pageNumber: number) {
    const params = new HttpParams().set('page', pageNumber.toString());
    return this.httpClient.get(this.baseUrl, { params }).pipe(take(1));
  }

  getUserInfo(userId: number) {
    return this.httpClient.get(this.baseUrl + `/${userId}`).pipe(take(1));
  }
}
