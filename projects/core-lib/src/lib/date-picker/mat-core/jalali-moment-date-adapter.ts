import * as jmoment from 'jalali-moment';
// import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { Inject, Injectable, OnInit, Optional } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';
// import {  ActiveCalender } from './active-calender-token';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';


/** Creates an array and fills it with values. */
function range<T>(length: number, valueFunction: (index: number) => T): T[] {
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}

@Injectable({
    providedIn: 'root'
  })
export class JalaliMomentDateAdapter extends NativeDateAdapter {

    // the currently active calendar, assume Gregorian
    private _activeCalendar: 'en-US' | 'fa-IR' | string = 'fa-IR';

    get activeCalendar(): 'en-US' | 'fa-IR' | string {
      return this._activeCalendar;
    }
  
    set activeCalendar(cal: 'en-US' | 'fa-IR' | string) {
      this._activeCalendar = cal;
    }
    constructor(//@Inject(ACTIVE_CALENDAR) public activeCalendarToken
        // private activeCalendarToken : ActiveCalender
        ) {
           // @Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string
        super('fa');
        // this.setLocale(dateLocale || jmoment.locale(dateLocale));
        super.setLocale('fa');
        //super('en-US');
        // this.setLocale(dateLocale || jmoment.locale(dateLocale));
        //debugger
        //console.log(this.activeCalendarToken);
        // if(this.activeCalendarToken != null){
        //     this.activeCalendarToken.subscribe((active) => {
        //         this.activeCalendar = active
        //     })
        // }
       
        // this.activeCalendarToken.getActiveCalender()?.subscribe((active) => {
        //     this.activeCalendar = active;
        //     if(active == 'fa-IR')
        //         super.setLocale(active || jmoment.locale(active));
        //     else if(active == 'en-US')
        //         super.setLocale(active || moment.locale(active));
        // });
        //console.log(this.activeCalendar);
    }
    
       /**
       * returns year in jalali calendar system.
       */
        override getYear(date: jmoment.Moment | any): number {
            return this.clone(date).jYear();
        }
    
        /**
           * returns month in jalali calendar system.
           */
        override getMonth(date: jmoment.Moment | any): number {
            return this.clone(date).jMonth();
        }
    
        /**
           * returns day in jalali calendar system.
           */
        override getDate(date: jmoment.Moment | any): number {
            return this.clone(date).jDate();
        }
    
        /**
           * returns Day Of Week in jalali calendar system.
           */
        override getDayOfWeek(date: jmoment.Moment | any): number {
            return this.clone(date).day();
        }
    
        /**
           * returns Month Names in jalali calendar system.
           * most of the time we use long format. short or narrow format for month names is a little odd.
           */
        override getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
            switch (style) {
                case 'long':
                case 'short':
                    return jmoment.localeData('fa').jMonths().slice(0);
                case 'narrow':
                    return jmoment.localeData('fa').jMonthsShort().slice(0);
            }
        }
    
        /**
           * borrowed from angular material code.
           */
        override getDateNames(): string[] {
            return range(31, i => String(i + 1));
            // return this._localeData.dates;
        }
    
        /**
           * returns Day Of Week names in jalali calendar system.
           */
        override getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
            switch (style) {
                case 'long':
                    return jmoment.localeData('fa').weekdays().slice(0);
                case 'short':
                    return jmoment.localeData('fa').weekdaysShort().slice(0);
                case 'narrow': 
                    return ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'];
                // return jmoment.localeData('fa').weekdaysMin().slice(0);
            }
        }
    
        /**
           * returns year in jalali calendar system.
           */
        override getYearName(date: jmoment.Moment | any): string {
            return this.clone(date).jYear().toString();
        }
    
        /**
           * returns first day of week in jalali calendar system.
           * first day of week is saturday, شنبه
           */
        override getFirstDayOfWeek(): number {
            return jmoment.localeData('fa').firstDayOfWeek();
            // return 6;
        }
    
        /**
           * returns Number of Days In Month in jalali calendar system.
           */
        override getNumDaysInMonth(date: jmoment.Moment | any): number {
            return this.clone(date).jDaysInMonth();
        }
        override clone(date: jmoment.Moment | any): jmoment.Moment | any {
            return date.clone().locale('fa');
        }
    
        /**
           * Pass 3 number in jalali calendar system to this function and it returns a jmoment object
           * @param year jalali year
           * @param month zero indexed jalali month
           * @param date jalali day
           */
        override createDate(year: number, month: number, date: number): jmoment.Moment | any {
            if (month < 0 || month > 11) {
                throw Error(
                    `Invalid month index "${month}". Month index has to be between 0 and 11.`
                );
            }
            if (date < 1) {
                throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
            }
            const result = jmoment()
                .jYear(year).jMonth(month).jDate(date)
                .hours(0).minutes(0).seconds(0).milliseconds(0)
                .locale('fa');
            // Check that the date wasn't above the upper bound for the month, causing the month to overflow
            if (this.getMonth(result) !== month) {
                throw Error(`Invalid date ${date} for month with index ${month}.`);
            }
            if (!result.isValid()) {
                throw Error(`Invalid date "${date}" for month with index "${month}".`);
            }
            return result;
        }
    
        override today(): jmoment.Moment | any {
            return jmoment().locale('fa');
        }
    
        override parse(value: any, parseFormat: string | string[]): jmoment.Moment | null | any {
            if (value && typeof value === 'string') {
                const result = jmoment(value, parseFormat, 'fa');
                return result;
            }
            return value ? jmoment(value).locale('fa') : null;
        }
    
        override format(date: jmoment.Moment | any, displayFormat: string): string {
            date = this.clone(date);
            if (!this.isValid(date)) {
                throw Error('JalaliMomentDateAdapter: Cannot format invalid date.');
            }
            return date.format(displayFormat);
        }
        override addCalendarYears(date: jmoment.Moment | any, years: number): jmoment.Moment | any {
            return this.clone(date).add(years, 'jYear');
        }
        override addCalendarMonths(date: jmoment.Moment | any, months: number): jmoment.Moment | any {
            return this.clone(date).add(months, 'jmonth');
        }
        override addCalendarDays(date: jmoment.Moment | any, days: number): jmoment.Moment | any {
            return this.clone(date).add(days, 'jDay');
        }
    
        /**
       *Gets the RFC 3339 compatible string (https://tools.ietf.org/html/rfc3339) for the given date.
       * This method is used to generate date strings that are compatible with native HTML attributes
       *such as the `min` or `max` attribute of an `<input>`.
       *@param date The date to get the ISO date string for.
       *@returns The ISO date string date string.
       */
        override toIso8601(date: jmoment.Moment | any): string {
            return this.clone(date).format();
        }
    
        override isDateInstance(obj: any): boolean {
            return jmoment.isMoment(obj);
        }
        override isValid(date: jmoment.Moment | any): boolean {
            return this.clone(date).isValid();
            // return date.isValid();
        }
        override invalid(): jmoment.Moment | any {
            return jmoment.invalid();
        }
    
        /**
       * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
       * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
       * string into null. Returns an invalid date for all other values.
       */
    
        /**
        * Attempts to deserialize a value to a valid date object. This is different from parsing in that
        * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
        * string). The default implementation does not allow any deserialization, it simply checks that
        * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
        * method on all of it's `@Input()` properties that accept dates. It is therefore possible to
        * support passing values from your backend directly to these properties by overriding this method
        * to also deserialize the format used by your backend.
        * @param value The value to be deserialized into a date object.
        * @returns The deserialized date object, either a valid date, null if the value can be
        *     deserialized into a null date (e.g. the empty string), or an invalid date.
        */
        override deserialize(value: any): jmoment.Moment | null | any {
            let date;
            if (value instanceof Date) {
                date = jmoment(value);
            }
            if (typeof value === 'string') {
                if (!value) {
                    return null;
                }
                date = jmoment(value, jmoment.ISO_8601).locale('fa');
            }
            if (date && this.isValid(date)) {
                return date;
            }
            return super.deserialize(value);
        }
}
