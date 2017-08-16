import * as moment from 'moment';

export class Match {
    id:number;
    createdAt:string;

    constructor(attributes:any) {
        this.id = attributes.id;
        let date = new Date();
        this.createdAt = attributes.createdAt || moment.parseZone(date).toISOString();
    }
}
