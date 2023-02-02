export interface CreateUserCommand{
  upn:string,
  password:string,
  confirmPassword:string,
  email:string,
  name:string,
  gender: number
}
