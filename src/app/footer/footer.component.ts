import { Component } from '@angular/core';
import { MemberDataService } from '../service/member-data.service';
import { IUserDesp } from '../userDesp';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  members:IUserDesp[]; //this will be of type Interface
  constructor(private memberData : MemberDataService){
  console.warn("MemberData", memberData.getMembers());
  this.members=memberData.getMembers();
  }

}
