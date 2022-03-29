import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FORM } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  getForm(): FormGroup {
    const form = new FormGroup({});
    const keys = Object.keys(FORM);
    keys.forEach(key => {
      form.addControl(key, this.getFormControl(FORM[key].initialValue, FORM[key].validation));
    });
    return form;
  }

  private getFormControl(initialValue, validation) {
    return new FormControl(initialValue, validation);
  }
}