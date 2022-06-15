import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string = 'https://localhost:44367/users';

  constructor(private httpClient:HttpClient) { }

  getUser(user:User):Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl+"?email="+user.email+"&password="+user.password)
  }
}
