import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngProfileComponent } from './eng-profile.component';

describe('EngProfileComponent', () => {
  let component: EngProfileComponent;
  let fixture: ComponentFixture<EngProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
