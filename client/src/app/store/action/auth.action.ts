import { Action, UPDATE } from '@ngrx/store'
import { AuthModel, AuthCredential, UserModel } from '../models/Auth.model';

export enum AuthActionType {
    LOAD_AUTH_STATE = '[Auth] LOAD_AUTH_STATE',
    LOAD_AUTH_STATE_SUCCESS = '[Auth] LOAD_AUTH_STATE_SUCCESS',
    LOGIN_AUTH_STATE_SUCCESS = '[Auth] LOGIN_AUTH_STATE_SUCCESS',
    LOGIN_AUTH_STATE_FAILURE = '[Auth] LOGIN_AUTH_STATE_FAILURE',

    TOOGLE_AUTH_STATE_SUCCESS = '[Auth] TOOGLE_AUTH_STATE_SUCCESS'
}

export class ActionParent implements Action {
    type:any
    payload:any
}

export class LoadUserStateAction implements Action{
    readonly type = AuthActionType.LOAD_AUTH_STATE
    constructor(public payload : AuthCredential) {}
}
export class LoadUserStateSuccessAction implements Action{
    readonly type = AuthActionType.LOAD_AUTH_STATE_SUCCESS
    constructor(public payload : UserModel) {}
}

export class UpdateUserStateAction implements Action{
    readonly type = AuthActionType.LOGIN_AUTH_STATE_SUCCESS
    constructor(public payload : String, public data : UserModel) {}
}

export class ToogleUserStateAction implements Action{
    readonly type = AuthActionType.TOOGLE_AUTH_STATE_SUCCESS
    constructor() {}
}

export class UpdateUserStateFailureAction implements Action{
    readonly type = AuthActionType.LOGIN_AUTH_STATE_FAILURE
    constructor(public paylaod:any) {}
}

export type AuthAction = UpdateUserStateAction | ToogleUserStateAction | LoadUserStateAction | LoadUserStateSuccessAction