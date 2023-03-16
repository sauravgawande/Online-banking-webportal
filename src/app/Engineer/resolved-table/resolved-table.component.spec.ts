import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvedTableComponent } from './resolved-table.component';

describe('ResolvedTableComponent', () => {
  let component: ResolvedTableComponent;
  let fixture: ComponentFixture<ResolvedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolvedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
