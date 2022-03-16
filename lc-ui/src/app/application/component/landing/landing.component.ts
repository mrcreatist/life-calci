import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { cardData } from '../../constant';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public cards = cardData;

  constructor (
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddUserComponent,
      presentingElement: document.querySelector('app-landing'),
      swipeToClose: true
    });
    return await modal.present();
  }

}
