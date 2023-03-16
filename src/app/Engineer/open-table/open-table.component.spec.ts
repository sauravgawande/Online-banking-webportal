import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTableComponent } from './open-table.component';

describe('OpenTableComponent', () => {
  let component: OpenTableComponent;
  let fixture: ComponentFixture<OpenTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
