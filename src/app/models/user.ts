import { LoginModel } from "./loginModel"
import { TokenModel } from "./tokenModel"

export interface User extends LoginModel,TokenModel{
  id:number
  firstName:string
  lastName:string

}
