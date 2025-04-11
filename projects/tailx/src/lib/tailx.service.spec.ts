import { TestBed } from '@angular/core/testing';

import { TailxService } from './tailx.service';

describe('TailxService', () => {
  let service: TailxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TailxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
