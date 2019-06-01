import { TestBed } from '@angular/core/testing';

import { CompanyOwnerService } from './company-owner.service';

describe('CompanyOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyOwnerService = TestBed.get(CompanyOwnerService);
    expect(service).toBeTruthy();
  });
});
