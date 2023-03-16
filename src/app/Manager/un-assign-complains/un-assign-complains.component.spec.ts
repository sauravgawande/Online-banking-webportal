import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAssignComplainsComponent } from './un-assign-complains.component';

describe('UnAssignComplainsComponent', () => {
  let component: UnAssignComplainsComponent;
  let fixture: ComponentFixture<UnAssignComplainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnAssignComplainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnAssignComplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
