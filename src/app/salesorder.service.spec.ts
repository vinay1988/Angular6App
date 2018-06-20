import { TestBed, inject } from '@angular/core/testing';

import { SalesorderService } from './salesorder.service';

describe('SalesorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesorderService]
    });
  });

  it('should be created', inject([SalesorderService], (service: SalesorderService) => {
    expect(service).toBeTruthy();
  }));
});
