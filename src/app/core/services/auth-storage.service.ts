import { Injectable } from '@angular/core';
import { IJWTDecoded } from '../models/jwt-decoded.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private tokenKey = 'pos_secret';
  private tokenExpirationKey = 'pos_exp';

  constructor(private storageSvc: StorageService) { }

  async saveTokenResponse(responseToken: string) {
    await this.storageSvc.set(this.tokenKey, responseToken);
    await this.storageSvc.set(this.tokenExpirationKey, Date.now());
  }

  async purge() {
    await this.storageSvc.remove(this.tokenKey);
  }

  async isAuthenticated(): Promise<boolean> {
    return await this.getToken() && !(await this.isTokenExpired());
  }

  // async isAuthenticated(): boolean {
    

  //   await this.getToken().then(value => {
  //     return value
  //   })
    
  // }

  async isTokenExpired(): Promise<boolean> {
    // const { exp } = await this.getJTWDecoded();
    // return Date.now() >= exp * 1000;
    const exp = await this.getTokenExp();
    return Date.now() != Number(exp) * 1000;
  }

  async getJTWDecoded(): Promise<IJWTDecoded> {
    return this.parseJwt(await this.getToken());
  }

  async getToken(): Promise<string> {
    return await this.storageSvc.get(this.tokenKey);
  }

  async getTokenExp(): Promise<string> {
    return await this.storageSvc.get(this.tokenExpirationKey);
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
