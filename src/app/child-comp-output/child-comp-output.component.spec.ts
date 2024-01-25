import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompOutputComponent } from './child-comp-output.component';

describe('ChildCompOutputComponent', () => {
  let component: ChildCompOutputComponent;
  let fixture: ComponentFixture<ChildCompOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildCompOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildCompOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
