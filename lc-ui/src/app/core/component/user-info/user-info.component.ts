/* eslint-disable space-before-function-paren */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from '../../service';
import { UserModel } from '../../../application/model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Output() data = new EventEmitter<UserModel>();

  form: FormGroup;

  constructor (
    private formService: FormService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formService.getForm();
  }

  submit() {
    if (this.form.valid) {
      this.data.emit(this.form.value);
    }
  }

  validationCheck(control: string) {
    return this.form.controls[control].touched && this.form.controls[control].errors;
  }

}
