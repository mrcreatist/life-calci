import { DataType } from '../enum';
import { FormModel } from '../model';

export const FORM: FormModel = {
    name: {
        type: DataType.typeString,
        initialValue: null,
        validation: []
    },
    date: {
        type: DataType.typeDate,
        initialValue: null,
        validation: []
    }
};
