/* eslint-disable space-before-function-paren */
import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../../../shared/service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  @Input() data: any;

  constructor (
    private dialog: DialogService
  ) { }

  close() {
    this.dialog.closeModal();
  }

}
