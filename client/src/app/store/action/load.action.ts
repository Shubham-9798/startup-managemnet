import { Action, UPDATE } from '@ngrx/store'

export enum LoadActionType {
    LOAD_STATE = '[Idea] LOAD_STATE',
    LOAD_STATE_SUCCESS = '[Idea] LOAD_STATE_SUCCESS',
    LOAD_STATE_FAILURE = '[Idea] LOAD_STATE_FAILURE',

    LOAD_IDEA_LIST = '[Idea] LOAD_IDEA_LIST',
    LOAD_IDEA_LIST_SUCCESS = '[Idea] LOAD_IDEA_LIST_SUCCESS',
    LOAD_IDEA_LIST_FAILURE = '[Idea] LOAD_IDEA_LIST_FAILURE',

    LOAD_IDEA_DETAILS = '[Idea] LOAD_IDEA_DETAILS',
    LOAD_IDEA_DETAILS_SUCCESS = '[Idea] LOAD_IDEA_DETAILS_SUCCESS',
    LOAD_IDEA_DETAILS_FAIL = '[Idea] LOAD_IDEA_DETAILS_FAIL',

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
// Load Idea List
export class LoadIdeaList implements Action{
    readonly type = LoadActionType.LOAD_IDEA_LIST
    constructor(public paylaod:any|null) {    }
}
export class LoadIdeaListSuccess implements Action{
    readonly type = LoadActionType.LOAD_IDEA_LIST_SUCCESS
    constructor(public paylaod:any) {}
}
export class LoadIdeaListFail implements Action{
    readonly type = LoadActionType.LOAD_IDEA_LIST_FAILURE
    constructor(public paylaod:any) {}
}
// Load Idea Details 
export class LoadIdeaDetails implements Action{
    readonly type = LoadActionType.LOAD_IDEA_DETAILS
    constructor(public paylaod:any|null) {    }
}
export class LoadIdeaDetailsSuccess implements Action{
    readonly type = LoadActionType.LOAD_IDEA_DETAILS_SUCCESS
    constructor(public paylaod:any|null) {    }
}
export class LoadIdeaDetailsFail implements Action{
    readonly type = LoadActionType.LOAD_IDEA_DETAILS_FAIL
    constructor(public paylaod:any|null) {    }
}

export type LoadAction = LoadClass  | LoadSuccess  | LoadFail |
                        LoadIdeaList | LoadIdeaListSuccess | LoadIdeaListFail |
                        LoadIdeaDetails | LoadIdeaDetailsSuccess | LoadIdeaDetailsFail
