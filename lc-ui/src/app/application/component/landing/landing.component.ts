/* eslint-disable space-before-function-paren */
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/service';
import { cardData } from '../../constant';
import { CardModel } from '../../model';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public cards: Array<CardModel> = cardData;

  constructor (
    private dialog: DialogService
  ) { }

  ngOnInit() {
  }

  async openModal() {
    this.dialog.openModal(AddUserComponent);
  }

  openDetail(card: CardModel) {
    this.dialog.openModal(UserDetailComponent, card);
  }

}
