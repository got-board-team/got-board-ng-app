import * as moment from 'moment';
import { User } from '../../auth/models/user';
import { AttrSetter } from '../../auth/models/attr_setter';
import { Player } from './player';

export class Match extends AttrSetter {
    id:number;
    createdAt:string;
    spectators:Array<User> = [];
    players:Array<Player> = [];

    constructor(attributes:any) {
        super();
        this.setAttributes(['id', 'spectators', 'players'], attributes);
        let date = new Date();
        this.createdAt = attributes.createdAt || moment.parseZone(date).toISOString();
    }
}
