import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOutputDemoComponent } from './child-output-demo.component';

describe('ChildOutputDemoComponent', () => {
  let component: ChildOutputDemoComponent;
  let fixture: ComponentFixture<ChildOutputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildOutputDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildOutputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
