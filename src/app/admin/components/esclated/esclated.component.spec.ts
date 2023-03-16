import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsclatedComponent } from './esclated.component';

describe('EsclatedComponent', () => {
  let component: EsclatedComponent;
  let fixture: ComponentFixture<EsclatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsclatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsclatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
