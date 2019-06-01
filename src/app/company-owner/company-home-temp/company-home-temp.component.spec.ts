import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHomeTempComponent } from './company-home-temp.component';

describe('CompanyHomeTempComponent', () => {
  let component: CompanyHomeTempComponent;
  let fixture: ComponentFixture<CompanyHomeTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyHomeTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyHomeTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
