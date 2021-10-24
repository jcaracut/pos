import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICommonResponse } from 'src/app/core/models/common-response.model';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = environment.API + '/api';

  constructor(private http: HttpClient) { }

  login(model: Login): Observable<ICommonResponse> {
    return this.http.post<ICommonResponse>(`${this.url}/signin`, model);
  }

  // register(model: IRegister): Observable<ICommonResponse> {
  //   return this.http.post<ICommonResponse>(`${this.url}/register`, model);
  // }

  // confirmEmail(model: IConfirmEmail): Observable<ICommonResponse> {
  //   return this.http.post<ICommonResponse>(`${this.url}/confirmemail`, model);
  // }

  // sendPasswordResetLink(email: string): Observable<ICommonResponse> {
  //   return this.http.post<ICommonResponse>(`${this.url}/SendPasswordResetLink`, { email });
  // }

  // resetPassword(model: IResetPassword): Observable<ICommonResponse> {
  //   return this.http.post<ICommonResponse>(`${this.url}/ResetPassword`, model);
  // }

  // logout(): Observable<any> {
  //   return this.http.post<any>(`${this.url}/Logout`, {});
  // }
}
