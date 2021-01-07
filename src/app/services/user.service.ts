import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

const API_URL = 'http://localhost:8080/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL);
  }

  getById(id: string): Observable<User> {
    return this.httpClient.get<User>(API_URL + `/${id}`);
  }

  deleteUser(id: string): Observable<User> {
    return this.httpClient.delete<User>(API_URL + `/${id}`);
  }

  updateUserProfile(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(API_URL + `/${id}`, user);
  }
}
