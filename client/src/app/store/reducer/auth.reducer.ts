import { AuthModel } from '../models/auth.model'
import { AuthAction, AuthActionType } from './../action/auth.action'


const initialState :AuthModel = { 
      data: null,
      isLogin: false ,
      isloading: false, 
      isloaded: null,
      accessToken:null, 
      error: null, 
      hasError:false
}

export function AuthReducer(
    state: AuthModel = initialState,
    action:AuthAction) {
        switch(action.type) {
            case AuthActionType.LOAD_AUTH_STATE :
                return {...state, isloading: true, accessToken:null, error: null, hasError:false}
            case AuthActionType.LOGIN_AUTH_STATE_FAILURE :
                    return {...state, isloading: false, hasError: true, error: action.paylaod}
            case AuthActionType.LOGIN_AUTH_STATE_SUCCESS :
                return { ...state, accessToken: action.payload, data: action.data,  isLogin: true, isloading:false }
            case AuthActionType.LOGOUT_AUTH_STATE :
                return {...state, isloading: true }
            case AuthActionType.LOGOUT_AUTH_STATE_SUCCESS :
                 return { ...state, isLogin: false, data: null, isloading: false, accessToken:null, error: null, hasError:false}
            case AuthActionType.LOGOUT_AUTH_STATE_FAILURE :
                return {...state, hasError: true}
            case AuthActionType.CHECK_SESSION_AUTH_STATE:
                return {...state, isloading:true}
            case AuthActionType.CHECK_SESSION_AUTH_STATE_SUCCESS:
                return {...state, isloading:false, isLogin: true, accessToken: action.payload, data: action.data}
            default:
                 return state
        }
   }