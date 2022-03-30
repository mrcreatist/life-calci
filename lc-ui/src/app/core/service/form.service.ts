import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FORM } from '../constant';
import { FormValidation } from '../enum';

@Injectable()
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
    const control = new FormControl(initialValue);
    validation.forEach(validate => {
      switch (validate) {
        case FormValidation.required: {
          control.addValidators(Validators.required);
          break;
        }
      }
    });
    return control;
  }
}
