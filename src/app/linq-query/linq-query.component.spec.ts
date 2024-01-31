import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinqQueryComponent } from './linq-query.component';

describe('LinqQueryComponent', () => {
  let component: LinqQueryComponent;
  let fixture: ComponentFixture<LinqQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinqQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinqQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
