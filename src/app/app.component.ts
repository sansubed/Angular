import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITodoList } from './app';
import {MemberDataService} from './service/member-data.service';
import { IUserDesp } from './userDesp';
import {UsersLogService} from './service/users-log.service'
import { IToDo } from './todo';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host:{ngSkipHydration:'true'}
})
export class AppComponent implements OnInit, OnDestroy{

  imageWidth: number = 60;
  imageMargin: number = 2;
  title: string = 'For Loop';
  users: string[] = ['Santona', 'Shreya', 'Basanta', 'Sunita'];
  //used on click event
  showInfo: boolean = false;
  //used in property binding in code
  //get the value from the backend, backend variable
  private _listFilter: string = '';
  UsersLogService: any;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In Setter: ', value);
    this.filteredUsers = this.performFilter(value);
  }

  filteredUsers: ITodoList[] = [];
  name: any;

  title2: string = 'This is 2-way data binding description';
  title3: string = 'Interface';

  dummyUrl =
    'https://img.freepik.com/free-photo/white-dog_95678-1.jpg?size=626&ext=jpg&ga=GA1.1.1742382580.1706024963&semt=sph';
  dummyUrlCaption: string = 'I am a happy dog';

  // here we are using the interface as the type ITodoList and this is a array
  userDetails: ITodoList[] = [
    {
      userId: 1,
      id: 1,
      title: 'Wash the dishes',
      completed: false,
      url: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=1380&t=st=1706024963~exp=1706025563~hmac=c6f0640f1b24f10779376953ef5e5df2ceb14cde525dabe2717a024c241f51d6',
    },
    {
      userId: 1,
      id: 2,
      title: 'Study Angular everyday after Work',
      completed: true,
      url: 'https://img.freepik.com/free-photo/shallow-focus-vertical-shot-cute-golden-retriever-puppy-sitting-grass-ground_181624-27259.jpg?w=740&t=st=1706025032~exp=1706025632~hmac=cdb6413ceb21e4ff310edbc9b31c45cb422fdaa49a71f1d37d6a440182b220cc',
    },
    {
      userId: 1,
      id: 3,
      title: 'Study MVC design pattern',
      completed: false,
      url: 'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=826&t=st=1706025066~exp=1706025666~hmac=d5a4a8dad5fa462ea926dc7d23fb9a56ea01526a5f181516e3817046f8ccf189',
    },
    {
      userId: 1,
      id: 4,
      title: 'Eat dinner everyday',
      completed: false,
      url: 'https://img.freepik.com/free-photo/australian-shepherd-aussie_155003-9715.jpg?w=740&t=st=1706025093~exp=1706025693~hmac=73cdf05d5931dac85ecdb5133e0683e85760368e0350bd4833dee433a4b216bc',
    },
    {
      userId: 1,
      id: 5,
      title: 'Drink Plenty of Water ',
      completed: false,
      url: 'https://img.freepik.com/free-photo/cute-spitz_144627-7076.jpg?w=826&t=st=1706025104~exp=1706025704~hmac=a6557da4105ddfb698ed553210d241c6216fa718b4d787dde4e1ebd6fac1d981',
    },
  ];

  performFilter(filterBy: string): ITodoList[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.userDetails.filter((userDetail: ITodoList) =>
      userDetail.completed.toString().toLocaleLowerCase().includes(filterBy),
    );
  }
  toggleInfo(): void {
    this.showInfo = !this.showInfo;
  }
 

  data:string="hello";
inputData:number=1;

updateData(){
  this.data = this.data === "hello" ? "hi" : "hello" ;
  // this.inputData = Math.floor(Math.random()*10);
  this.inputData = this.inputData+1;
}
// onClick(message:string):void
// {this.data="I am data"+message;
// }

notify="x";
childToParentOutput(message:string)
{
  console.warn(message);
  this.notify = message;
}

value="Santona";
updateValue(newValue: string){
console.warn(newValue);
this.value = newValue;
}


// memberData=[
//   {name:'Santona', email:'santona@test.com'},
//   {name:'Sam', email:'sam@test.com'},
//   {name:'Peter', email:'peter@test.com'},
//   {name:'John', email:'john@test.com'},
// ]

//this is to use the service

members: IUserDesp[] = []; //this has to be the interface type for the data that is coming
userToDos:IToDo[]=[];
errorMessage:string='';
sub!:Subscription; //the bang or ! on variable means that we will deal with this later
constructor(private memberData:MemberDataService, private userTodo:UsersLogService)
{

}

 //this is the method in the OnInit interface
 ngOnInit(): void {
  console.log('In OnInit');
  this.listFilter = 'true';
  console.warn("Member data", this.memberData.getMembers());
  this.members=this.memberData.getMembers();

  //there are 2 ways to do this
  //this is from the get call 
  // this.userTodo.getUsersLog().subscribe((data:IToDo[])=>{
  //   this.userToDos=data;
  //   console.log("DATA",data);
  // })

  //ALTERNATIVELY,


 this.sub=this.userTodo.getUsersLog().subscribe({
  next:(a)=>{this.userToDos=a;
  console.log("Data from API",a)}, //if there is more line of the code then we can add {}
  error:(err) =>this.errorMessage = err,
  
 })
}

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.sub.unsubscribe();
}


}

