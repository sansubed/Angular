import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.scss',
})
export class ChildCompComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  @Input() public data: any;

  //ngOnChanges: only watches for changes to input properties 
  ngOnChanges(){
    console.warn('data property has been changed',this.data);

  }
  // @Output() notify: EventEmitter<string>=new EventEmitter<string>();

  // onClick(){
  //   this.notify.emit("Clicked");
  // }

  @Input() public item=0;

  
}
