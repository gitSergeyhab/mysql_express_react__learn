import { makeAutoObservable } from 'mobx'

export default class UserStore {
    _isAuth: boolean;
    _user: Object;

    constructor() {
        this._isAuth = false;
        this._user = {};

        makeAutoObservable(this);
    }

    setIsAuth(auth: boolean) {
        this._isAuth = auth;
    }

    setUser(user: Object) {
        this._user = user;
    }

    get isAuth () {
        return this._isAuth;
    }

    get user () {
        return this._user;
    }
}