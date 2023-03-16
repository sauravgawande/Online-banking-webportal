import { TestBed } from '@angular/core/testing';

import { ComplaintLogService } from './complaint-log.service';

describe('ComplaintLogService', () => {
  let service: ComplaintLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
