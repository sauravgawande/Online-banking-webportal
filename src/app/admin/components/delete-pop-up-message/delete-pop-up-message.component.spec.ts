import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePopUpMessageComponent } from './delete-pop-up-message.component';

describe('DeletePopUpMessageComponent', () => {
  let component: DeletePopUpMessageComponent;
  let fixture: ComponentFixture<DeletePopUpMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePopUpMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePopUpMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
