import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerMainComponent } from './engineer-main.component';

describe('EngineerMainComponent', () => {
  let component: EngineerMainComponent;
  let fixture: ComponentFixture<EngineerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
