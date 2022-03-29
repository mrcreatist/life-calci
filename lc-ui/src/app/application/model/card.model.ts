export class UserModel {
    name: string;
    date: Date;
}

export class CardModel extends UserModel {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    months: number;
    weeks: number;
    years: number;
}
