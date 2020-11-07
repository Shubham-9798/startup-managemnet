import { CategoryState } from '../models/master.model'
import { CategoryAction, CategoryActionType } from './../action/master.action'


const initialState :CategoryState = { 
    ids: [],
    entities: {},
    hasError: false,
    isloading: false,
    error: null
}

export function MasterReducer(
    state: CategoryState = initialState,
    action:CategoryAction) {
        switch(action.type) {
            case CategoryActionType.LOAD_CATEGORY_STATE :
                return {...state }
            case CategoryActionType.LOAD_CATEGORY_STATE_SUCCESS :
                // const ids = state.ids.slice(0);
                // ids.push(action.payload.id);
                // ids.sort(sortBySeqNo);
                // build a new courses state
                return {
                    ...state
                    // ids,
                    // entities: {
                    //     ...state.entities, 
                    //     action.payload.
                    // }
                };
            // case AuthActionType.LOGIN_AUTH_STATE_SUCCESS :
            //     return { ...state, accessToken: action.payload, data: action.data,  isLogin: true, isloading:false }
            default:
                 return state
        }
   }