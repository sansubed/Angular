import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-output-demo',
  templateUrl: './child-output-demo.component.html',
  styleUrl: './child-output-demo.component.scss'
})
export class ChildOutputDemoComponent implements OnInit {
@Output() updateValueEvent = new EventEmitter<string>();

ngOnInit(): void {
  
}

}
