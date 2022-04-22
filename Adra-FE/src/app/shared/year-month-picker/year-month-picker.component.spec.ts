import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { YearMonthPickerComponent } from "./year-month-picker.component";

describe('YearMonthPickerComponent', () => {
    let component: YearMonthPickerComponent;
    let fixture: ComponentFixture<YearMonthPickerComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let formElement: any;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [YearMonthPickerComponent],
            imports: [ReactiveFormsModule, MatSelectModule, MatFormFieldModule, BrowserAnimationsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(YearMonthPickerComponent);
        component = fixture.componentInstance;
        component.years = [2022];
        component.months = [4];
        component.selectedYearMonth = { year: 2022, month: 4 };
        formElement = fixture.debugElement.nativeElement.querySelector('form');
        fixture.detectChanges();
    });

    it('Form should have 2 mat select elements', () => {
        const selectElements = formElement.querySelectorAll('mat-select');
        expect(selectElements.length).toEqual(2);
    });

    it('Form should have a `Year` control mat label', () => {
        const labels = formElement.querySelectorAll('mat-label');
        expect(labels[0].innerText).toBe('Year');
    });

    it('Form should have a `Month` control mat label', () => {
        const labels = formElement.querySelectorAll('mat-label');
        expect(labels[1].innerText).toBe('Month');
    });

    it('Year should have initial value of 2022', () => {
        const yearControl = component.yearMonthForm.get('year');
        expect(yearControl?.value).toBe(2022);
    });

    it('Month should have initial value of 4', () => {
        const monthControl = component.yearMonthForm.get('month');
        expect(monthControl?.value).toBe(4);
    });

    it('When the year value change, yearMonth event emitter should emit the year value', () => {
        spyOn(component.yearMonth, 'emit');
        component.f['year'].patchValue(2023);
        fixture.detectChanges();
        expect(component.yearMonth.emit).toHaveBeenCalledWith({ year: 2023, month: 4 });
    });

    it('When the month value change, yearMonth event emitter should emit the month value', () => {
        spyOn(component.yearMonth, 'emit');
        component.f['month'].patchValue(5);
        fixture.detectChanges();
        expect(component.yearMonth.emit).toHaveBeenCalledWith({ year: 2022, month: 5 });
    });
});