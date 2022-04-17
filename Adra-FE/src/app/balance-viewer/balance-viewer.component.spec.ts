import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceViewerComponent } from './balance-viewer.component';

describe('BalanceViewerComponent', () => {
  let component: BalanceViewerComponent;
  let fixture: ComponentFixture<BalanceViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
