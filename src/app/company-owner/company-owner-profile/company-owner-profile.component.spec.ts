import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOwnerProfileComponent } from './company-owner-profile.component';

describe('CompanyOwnerProfileComponent', () => {
  let component: CompanyOwnerProfileComponent;
  let fixture: ComponentFixture<CompanyOwnerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOwnerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOwnerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
