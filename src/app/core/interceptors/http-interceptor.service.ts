import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { AuthStorageService } from '../services/auth-storage.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authStorage: AuthStorageService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.authStorage.getToken()).pipe(mergeMap(token => {
      if (token) {
        const request = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });

        return next.handle(request).pipe(catchError((err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.authStorage.purge();
              this.router.navigateByUrl('/login');
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
          }
        }));
      }
      else {
        return next.handle(req);
      }
    }));
  }
}
