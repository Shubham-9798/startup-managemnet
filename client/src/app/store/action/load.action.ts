import { Action, UPDATE } from '@ngrx/store'

export enum LoadActionType {
    LOAD_STATE = '[Idea] LOAD_STATE',
    LOAD_STATE_SUCCESS = '[Idea] LOAD_STATE_SUCCESS',
    LOAD_STATE_FAILURE = '[Idea] LOAD_STATE_FAILURE',

    LOAD_IDEA_LIST = '[Idea] LOAD_IDEA_LIST',
    LOAD_IDEA_LIST_SUCCESS = '[Idea] LOAD_IDEA_LIST_SUCCESS',
    LOAD_IDEA_LIST_FAILURE = '[Idea] LOAD_IDEA_LIST_FAILURE',

}

export class ActionParent implements Action {
    type:any
    payload:any
}

// ACTION
export class LoadClass implements Action{
    readonly type = LoadActionType.LOAD_STATE
    constructor(public payload : any) {}
}
export class LoadSuccess implements Action{
    readonly type = LoadActionType.LOAD_STATE_SUCCESS
    constructor(public payload : any) {}
}
export class LoadFail implements Action{
    readonly type = LoadActionType.LOAD_STATE_FAILURE
    constructor(public paylaod:any) {}
}

export class LoadIdeaList implements Action{
    readonly type = LoadActionType.LOAD_IDEA_LIST
    constructor(public paylaod:any|null) {}
}
export class LoadIdeaListSuccess implements Action{
    readonly type = LoadActionType.LOAD_IDEA_LIST_SUCCESS
    constructor(public paylaod:any) {}
}
export class LoadIdeaListFail implements Action{
    readonly type = LoadActionType.LOAD_IDEA_LIST_FAILURE
    constructor(public paylaod:any) {}
}

export type LoadAction = LoadClass  | LoadSuccess  | LoadFail |
                        LoadIdeaList | LoadIdeaListSuccess | LoadIdeaListFail
