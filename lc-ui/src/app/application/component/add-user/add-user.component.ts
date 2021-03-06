/* eslint-disable space-before-function-paren */
import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../shared/service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor (
    private dialog: DialogService
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.dialog.closeModal();
  }

}
