import { Injectable } from '@angular/core';
import { UserModel } from '../../application/model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private key = 'dataCollection';

  write(data: Array<UserModel>, key: string = this.key) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  read() {
    return JSON.parse(localStorage.getItem(this.key)) || [];
  }

  isStorageEmpty() {
    return !this.read()?.length;
  }

}
