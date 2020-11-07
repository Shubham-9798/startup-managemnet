import { HttpHeaders } from "@angular/common/http";
import { resData } from '../store/models/auth.model';


let Header =  () => {
    let user:resData = JSON.parse(localStorage.getItem('user'))
    let  accessToken  = user?user.accessToken:""
    let header = new HttpHeaders()
                .set("Content-Type", "application/json")
                .set("Authorization", "Berer " + accessToken)
   console.log(accessToken);
   return header                
}

export { Header}