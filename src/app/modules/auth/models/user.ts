import { AttrSetter } from './attr_setter';

export class User extends AttrSetter {
    email: string;
    nickname: string;
    picture: string;

    constructor(attributes:any) {
        super();
        this.setAttributes(['email', 'nickname', 'picture'], attributes);
    }
}