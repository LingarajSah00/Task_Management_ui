import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTempComponent } from './company-temp.component';

describe('CompanyTempComponent', () => {
  let component: CompanyTempComponent;
  let fixture: ComponentFixture<CompanyTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
