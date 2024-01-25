import { Component, Output , EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-comp-output',
  templateUrl: './child-comp-output.component.html',
  styleUrl: './child-comp-output.component.scss'
})
export class ChildCompOutputComponent implements OnInit {

 
  constructor()
  {
    
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  @Output() childToParentOutputEvent= new EventEmitter<string>();

}
