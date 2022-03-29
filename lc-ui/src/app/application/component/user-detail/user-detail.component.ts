/* eslint-disable space-before-function-paren */
import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../shared/service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor (
    private dialog: DialogService
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialog.closeModal();
  }

}
