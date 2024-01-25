import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements OnInit , AfterViewInit{
  constructor(){

  }
  ngAfterViewInit(): void {
    let count=1;
    
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res: any)=>{
      let countVal="Video" +" "+ count++;
      console.log(countVal);
   this.print(countVal, "elContainerTwo" );
   this.print(countVal, "elContainer" )});
  }
  @ViewChild('addBtn') addBtn!:ElementRef;
  ngOnInit(): void {
    
  }

  print(val:string, containerID:string){
    let el= document.createElement('li');
    el.innerText=val;
    let container = document.getElementById(containerID);
  
  if (container) {
    container.appendChild(el);
  } else {
    console.error("Element with ID 'elContainer' not found");
  }
  }
 


}

