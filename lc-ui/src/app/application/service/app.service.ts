/* eslint-disable space-before-function-paren */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardModel, UserModel } from '../model';
import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInWeeks,
  differenceInYears
} from 'date-fns';
import { StorageService } from '../../core/service';

@Injectable()
export class AppService {

  dataCollection: Array<UserModel> = [];
  $data = new BehaviorSubject(this.dataCollection);

  constructor (
    private storage: StorageService
  ) {
    this.dataCollection = this.readStorage();
    this.updateEvent();
  }

  addUser(data: UserModel) {
    this.dataCollection.push(data);
    this.updateEvent();
    this.writeStorage();
  }

  calculateTime(user: UserModel): CardModel {
    const tillDate = new Date();
    const fromDate = new Date(user.date);
    const data: CardModel = {
      ...user,
      seconds: differenceInSeconds(fromDate, tillDate),
      minutes: differenceInMinutes(fromDate, tillDate),
      hours: differenceInHours(fromDate, tillDate),
      days: differenceInDays(fromDate, tillDate),
      months: differenceInMonths(fromDate, tillDate),
      weeks: differenceInWeeks(fromDate, tillDate),
      years: differenceInYears(fromDate, tillDate)
    };
    return data;
  }

  updateEvent() {
    this.$data.next(this.dataCollection);
  }

  writeStorage() {
    this.storage.write(this.dataCollection);
  }

  readStorage() {
    return this.storage.read();
  }

}
