import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IToDo } from '../todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//readonly is like const, cant change the value
export class UsersLogService {
  apiUrl="https://jsonplaceholder.typicode.com/todos/";

  //get is the method inside the HttpClient class
  constructor(private http:HttpClient) {
    
  }
    getUsersLog():Observable<IToDo[]>
    {
      return this.http.get<IToDo[]>(this.apiUrl);
    }
   
}



