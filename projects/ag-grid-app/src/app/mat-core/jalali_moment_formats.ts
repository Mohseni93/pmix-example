import { InjectionToken } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';
export class jalaliFormat{
    value=1;
    get display(){
        return this.value==1?
        {
            dateInput: 'LL',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
          }:{
            dateInput: 'jYYYY/jMM/jDD',
            monthYearLabel: 'jYYYY jMMMM',
            dateA11yLabel: 'jYYYY/jMM/jDD',
            monthYearA11yLabel: 'jYYYY jMMMM'
        }
    }
    get parse(){
        return this.value==1?{
            dateInput: 'LL',
          }:{
            dateInput: 'jYYYY/jMM/jDD',
          }
    }
}
export const JALALI_MOMENT_FORMATS: MatDateFormats = {
    parse: {
        dateInput: 'jYYYY/jMM/jDD',
        // dateInput: 'l',
    },
    display: {
        dateInput: 'jYYYY/jMM/jDD',
        monthYearLabel: 'jYYYY jMMMM',
        dateA11yLabel: 'jYYYY/jMM/jDD',
        monthYearA11yLabel: 'jYYYY jMMMM'
    }
}; 

// export const MOMENT_FORMATS: InjectionToken<MOMENT_FORMATS>;
