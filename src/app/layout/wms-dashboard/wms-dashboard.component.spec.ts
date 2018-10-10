import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsDashboardComponent } from './wms-dashboard.component';

describe('WmsDashboardComponent', () => {
  let component: WmsDashboardComponent;
  let fixture: ComponentFixture<WmsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
