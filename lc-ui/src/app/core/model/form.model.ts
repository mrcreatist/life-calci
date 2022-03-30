import { DataType, FormValidation } from '../enum/data-type.enum';

export class FormModel {
    name: FormData;
    date: FormData;
}

export class FormData {
    type: DataType;
    initialValue: string;
    validation: Array<FormValidation>;
}
