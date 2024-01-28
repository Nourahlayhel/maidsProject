import { TestBed } from '@angular/core/testing';

import { ErrorReporterService } from './error-reporter.service';

describe('ErrorReporter', () => {
  let service: ErrorReporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorReporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
