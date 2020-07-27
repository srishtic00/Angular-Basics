import { TestBed } from '@angular/core/testing';

import { UppercaseConvertorService } from './uppercase-convertor.service';

describe('UppercaseConvertorService', () => {
  let service: UppercaseConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UppercaseConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
