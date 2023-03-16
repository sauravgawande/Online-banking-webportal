import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackcomplaintComponent } from './trackcomplaint.component';

describe('TrackcomplaintComponent', () => {
  let component: TrackcomplaintComponent;
  let fixture: ComponentFixture<TrackcomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackcomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
