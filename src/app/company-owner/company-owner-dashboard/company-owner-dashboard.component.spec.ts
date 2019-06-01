import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOwnerDashboardComponent } from './company-owner-dashboard.component';

describe('CompanyOwnerDashboardComponent', () => {
  let component: CompanyOwnerDashboardComponent;
  let fixture: ComponentFixture<CompanyOwnerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOwnerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOwnerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
