/* eslint-disable space-before-function-paren */
/* eslint-disable object-shorthand */
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable()
export class DialogService {

  constructor (
    private modalController: ModalController
  ) { }

  async openModal(component: any, options: any = null) {
    return await this.modalController.create({
      component: component,
      componentProps: { data: options },
      presentingElement: document.querySelector('app-landing'),
      swipeToClose: true
    }).then(dialog => dialog.present());
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
