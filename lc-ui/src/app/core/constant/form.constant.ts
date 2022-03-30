import { DataType, FormValidation } from '../enum';
import { FormModel } from '../model';

export const FORM: FormModel = {
    name: {
        type: DataType.typeString,
        initialValue: null,
        validation: [FormValidation.required]
    },
    date: {
        type: DataType.typeDate,
        initialValue: null,
        validation: [FormValidation.required]
    }
};
