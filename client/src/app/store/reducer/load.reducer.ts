import { LoadState } from '../models/load.model'
import { LoadActionType, LoadAction } from './../action/load.action'


const initialState :LoadState = { 
    ideas: null,
    isLoaded:false,
    hasError: false,
    isLoading: false,
    error: null,
    msg: "",
}

export function LoadReducer(
    state: LoadState = initialState,
    action:LoadAction) {
        switch(action.type) {
            case LoadActionType.LOAD_STATE :
                return {...state, isLoading: true }
            case LoadActionType.LOAD_STATE_SUCCESS :
                return {...state, isLoading: false, msg: "Submitted", isLoaded:true}
            case LoadActionType.LOAD_STATE_FAILURE :
                 return {...state, isLoading: false, msg: "Submitted", isLoaded:true, hasError: true, error:action.paylaod, }
            case LoadActionType.LOAD_IDEA_LIST:
                return { ...state, isLoading: true, isLoaded: true}
            case LoadActionType.LOAD_IDEA_LIST_SUCCESS:
                return { ...state, ideas: action.paylaod.data[0].idea, isLoading: false, isLoaded: true}
            case LoadActionType.LOAD_IDEA_LIST_FAILURE:
                return { ...state, error: action.paylaod, hasError: true, isLoaded: true}
            default:
                 return state
        }
   }