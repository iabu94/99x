import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportExistsConfirmationDialogComponent } from './report-exists-confirmation-dialog.component';

describe('ReportExistsConfirmationDialogComponent', () => {
  let component: ReportExistsConfirmationDialogComponent;
  let fixture: ComponentFixture<ReportExistsConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportExistsConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportExistsConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
