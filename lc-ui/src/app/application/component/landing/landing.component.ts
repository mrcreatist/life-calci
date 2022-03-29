/* eslint-disable space-before-function-paren */
import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../shared/service';
import { CardModel, UserModel } from '../../model';
import { AppService } from '../../service';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public cards: Array<CardModel> = [];

  constructor (
    private dialog: DialogService,
    private app: AppService
  ) { }

  ngOnInit() {
    this.app.$data.subscribe((users: Array<UserModel>) => {
      users.forEach((user: UserModel) => this.cards.push(this.app.calculateTime(user)));
    });
  }

  async openModal() {
    this.dialog.openModal(AddUserComponent);
  }

  openDetail(card: CardModel) {
    this.dialog.openModal(UserDetailComponent, card);
  }

}
