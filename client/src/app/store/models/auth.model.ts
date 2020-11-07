

export interface AuthModel {
    data: UserModel
    isLogin : boolean
    accessToken : string
    isloading:boolean
    isloaded:boolean
    error: any,
    hasError: boolean
}

export interface UserModel {
    username:String
    role:String
    isAdmin:boolean
}


// ---------------------
export interface AuthCredential {
    username: string
    password: string
}

export interface resData  {
    status: number
    accessToken: string
    refreshToken: string
    data: UserModel
};