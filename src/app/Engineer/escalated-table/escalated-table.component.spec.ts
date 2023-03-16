import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalatedTableComponent } from './escalated-table.component';

describe('EscalatedTableComponent', () => {
  let component: EscalatedTableComponent;
  let fixture: ComponentFixture<EscalatedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalatedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalatedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
