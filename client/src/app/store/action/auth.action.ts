import { Action, UPDATE } from '@ngrx/store'
import { AuthModel, AuthCredential, UserModel } from '../models/Auth.model';

export enum AuthActionType {
    LOAD_AUTH_STATE = '[Auth] LOAD_AUTH_STATE',
    LOGIN_AUTH_STATE_SUCCESS = '[Auth] LOGIN_AUTH_STATE_SUCCESS',
    LOGIN_AUTH_STATE_FAILURE = '[Auth] LOGIN_AUTH_STATE_FAILURE',

    LOGOUT_AUTH_STATE = '[Auth] LOGOUT_AUTH_STATE',
    LOGOUT_AUTH_STATE_SUCCESS = '[Auth] LOGOUT_AUTH_STATE_SUCCESS',
    LOGOUT_AUTH_STATE_FAILURE = '[Auth] LOGOUT_AUTH_STATE_FAILURE',

    CHECK_SESSION_AUTH_STATE = '[Auth] CHECK_SESSION_AUTH_STATE',
    CHECK_SESSION_AUTH_STATE_SUCCESS = '[Auth] CHECK_SESSION_AUTH_STATE_SUCCESS',
    CHECK_SESSION_AUTH_STATE_FAILURE = '[Auth] CHECK_SESSION_AUTH_STATE_FAILURE'

}

export class ActionParent implements Action {
    type:any
    payload:any
}

// ACTION
export class LoadUserStateAction implements Action{
    readonly type = AuthActionType.LOAD_AUTH_STATE
    constructor(public payload : AuthCredential) {}
}
export class Login implements Action{
    readonly type = AuthActionType.LOGIN_AUTH_STATE_SUCCESS
    constructor(public payload : String, public data : UserModel) {}
}
export class LoginFailed implements Action{
    readonly type = AuthActionType.LOGIN_AUTH_STATE_FAILURE
    constructor(public paylaod:any) {}
}

// ACTION
export class LoadLogout implements Action{
    readonly type = AuthActionType.LOGOUT_AUTH_STATE
    constructor() {}
}
export class Logout implements Action{
    readonly type = AuthActionType.LOGOUT_AUTH_STATE_SUCCESS
    constructor() {}
}
export class LogoutFailure implements Action{
    readonly type = AuthActionType.LOGOUT_AUTH_STATE_FAILURE
    constructor(public paylaod:any) {}
}

// Action
export class CheckSession implements Action{
    readonly type = AuthActionType.CHECK_SESSION_AUTH_STATE
    constructor() {}
}
export class CheckSessionSuccess implements Action{
    readonly type = AuthActionType.CHECK_SESSION_AUTH_STATE_SUCCESS
    constructor(public payload : String, public data : UserModel) {}
}
export class CheckSessionFail implements Action{
    readonly type = AuthActionType.CHECK_SESSION_AUTH_STATE_FAILURE
    constructor() {}
}

export type AuthAction = Login  | LoadUserStateAction  | LoginFailed | 
                         LoadLogout | Logout | LogoutFailure |
                         CheckSession | CheckSessionSuccess | CheckSessionFail