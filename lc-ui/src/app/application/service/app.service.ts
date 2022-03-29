/* eslint-disable space-before-function-paren */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

@Injectable({
  providedIn: 'root'
})
export class AppService {

  key = 'dataCollection';
  dataCollection: Array<UserModel> = [];
  $data = new BehaviorSubject(this.dataCollection);

  constructor () {
    this.dataCollection = this.readLocal();
    this.updateEvent();
  }

  addUser(data: UserModel) {
    this.dataCollection.push(data);
    this.updateEvent();
    this.updateLocal();
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

  updateLocal() {
    localStorage.setItem(this.key, JSON.stringify(this.dataCollection));
  }

  readLocal() {
    return JSON.parse(localStorage.getItem(this.key)) || [];
  }

}
