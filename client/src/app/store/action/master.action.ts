import { Action, UPDATE } from '@ngrx/store'
import { AuthModel, AuthCredential, UserModel } from '../models/Auth.model';

export enum CategoryActionType {
    LOAD_CATEGORY_STATE = '[Category] LOAD_CATEGORY_STATE_SUCCESS',
    LOAD_CATEGORY_STATE_SUCCESS = '[Category] LOAD_CATEGORY_STATE_SUCCESS',
    LOAD_CATEGORY_STATE_FAILURE = '[Category] LOAD_CATEGORY_STATE_SUCCESS',

    // LOGOUT_Category_STATE = '[Auth] LOGOUT_Category_STATE',
    // LOGOUT_Category_STATE_SUCCESS = '[Auth] LOGOUT_Category_STATE_SUCCESS',
    // LOGOUT_Category_STATE_FAILURE = '[Auth] LOGOUT_Category_STATE_FAILURE',

    // CHECK_SESSION_Category_STATE = '[Auth] CHECK_SESSION_Category_STATE',
    // CHECK_SESSION_Category_STATE_SUCCESS = '[Auth] CHECK_SESSION_Category_STATE_SUCCESS',
    // CHECK_SESSION_Category_STATE_FAILURE = '[Auth] CHECK_SESSION_Category_STATE_FAILURE'

}

export class ActionParent implements Action {
    type:any
    payload:any
}

// ACTION
export class LoadCategory implements Action{
    readonly type = CategoryActionType.LOAD_CATEGORY_STATE
    constructor() {}
}
export class LoadCategorySuccess implements Action{
    readonly type = CategoryActionType.LOAD_CATEGORY_STATE_SUCCESS
    constructor(public payload : any) {}
}
export class LoadCategoryFail implements Action{
    readonly type = CategoryActionType.LOAD_CATEGORY_STATE_FAILURE
    constructor(public paylaod:any) {}
}

export type CategoryAction = LoadCategory  | LoadCategorySuccess  | LoadCategoryFail 
