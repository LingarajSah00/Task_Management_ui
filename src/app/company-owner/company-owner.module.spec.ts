import { CompanyOwnerModule } from './company-owner.module';

describe('CompanyOwnerModule', () => {
  let companyOwnerModule: CompanyOwnerModule;

  beforeEach(() => {
    companyOwnerModule = new CompanyOwnerModule();
  });

  it('should create an instance', () => {
    expect(companyOwnerModule).toBeTruthy();
  });
});
