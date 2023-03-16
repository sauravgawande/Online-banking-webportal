import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercomplaintComponent } from './registercomplaint.component';

describe('RegistercomplaintComponent', () => {
  let component: RegistercomplaintComponent;
  let fixture: ComponentFixture<RegistercomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistercomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistercomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
