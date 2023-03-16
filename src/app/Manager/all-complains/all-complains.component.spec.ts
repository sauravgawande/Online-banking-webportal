import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComplainsComponent } from './all-complains.component';

describe('AllComplainsComponent', () => {
  let component: AllComplainsComponent;
  let fixture: ComponentFixture<AllComplainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllComplainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
