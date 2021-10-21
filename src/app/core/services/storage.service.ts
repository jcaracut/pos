import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
  }
  init = async () => await this.storage.create();
  set = async (key: string, value: any) => await this.storage.set(key, value);
  get = async (key: string) => await this.storage.get(key);
  remove = async (key: string) => await this.storage.remove(key);
  clear = async () => await this.storage.clear();
}
