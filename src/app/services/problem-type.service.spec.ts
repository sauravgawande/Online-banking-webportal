import { TestBed } from '@angular/core/testing';

import { ProblemTypeService } from './problem-type.service';

describe('ProblemTypeService', () => {
  let service: ProblemTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
