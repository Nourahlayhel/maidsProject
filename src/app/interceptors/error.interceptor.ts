import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorReporterService } from '../services/error-reporter.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorReporterService: ErrorReporterService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP error occurred:', error);
        this.errorReporterService.showErrorMessage();
        setTimeout(() => {
          this.errorReporterService.hideErrorMessage();
        }, 5000);

        throw error;
      })
    );
  }
}
