import { AuthModel } from '../models/auth.model'
import { AuthAction, AuthActionType } from './../action/auth.action'


const initialState: AuthModel = { data: null, isLogin: false , isloading: false, accessToken:null, error: null, hasError:false}

export function AuthReducer(
    state: AuthModel = initialState,
    action:AuthAction) {
        switch(action.type) {
            case AuthActionType.LOAD_AUTH_STATE:
                return {...state, loading: true}
            case AuthActionType.LOAD_AUTH_STATE_SUCCESS:
                return {...state, data: action.payload, loading: false}
            case AuthActionType.LOGIN_AUTH_STATE_SUCCESS:
                return { ...state, accessToken: action.payload, data: action.data,  isLogin: true, loading:false }
            case AuthActionType.TOOGLE_AUTH_STATE_SUCCESS:
                return { ...state, isLogin: true }
            default:
                 return state
        }
   }