import { User } from '../../auth/models/user';
import { AttrSetter } from '../../auth/models/attr_setter';
import { Match } from './match';

export class Player extends AttrSetter {
    user: User;
    match: Match;
    house: string;

    constructor(attributes:any) {
        super();
        this.setAttributes(['user', 'match', 'house'], attributes);
    }
}