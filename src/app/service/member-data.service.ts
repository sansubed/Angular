import { Injectable } from '@angular/core';
import { IUserDesp } from '../userDesp';

@Injectable({
  providedIn: 'root'
})
export class MemberDataService {

  constructor() { }
 
  getMembers():IUserDesp[]
  {
    return[
      {name:'Santona', age:25,email:'santona@test.com'},
      {name:'Sam', age:20,email:'sam@test.com'},
      {name:'Peter', age:21,email:'peter@test.com'},
      {name:'John', age:22,email:'john@test.com'},
    ]
  }
}
