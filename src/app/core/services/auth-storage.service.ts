import { Injectable } from '@angular/core';
import { IJWTDecoded } from '../models/jwt-decoded.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private tokenKey = 'hhsa-token';

  constructor(private storageSvc: StorageService) { }

  async saveTokenResponse(responseToken: string) {
    await this.storageSvc.set(this.tokenKey, responseToken);
  }

  async purge() {
    await this.storageSvc.remove(this.tokenKey);
  }

  async isAuthenticated(): Promise<boolean> {
    return await this.getToken() && !(await this.isTokenExpired());
  }

  async isTokenExpired(): Promise<boolean> {
    const { exp } = await this.getJTWDecoded();
    return Date.now() >= exp * 1000;
  }

  async getJTWDecoded(): Promise<IJWTDecoded> {
    return this.parseJwt(await this.getToken());
  }

  async getToken(): Promise<string> {
    return await this.storageSvc.get(this.tokenKey);
  }

  parseJwt(token: string) {
    if (token === null || token.length === 0) {
      return null;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));

    return JSON.parse(jsonPayload);
  };

}
