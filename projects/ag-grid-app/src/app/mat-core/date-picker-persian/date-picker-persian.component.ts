import { Component, OnInit } from '@angular/core';
import { JalaliMomentDateAdapter } from '../mat-core/jalali-moment-date-adapter';
import * as jmoment from 'jalali-moment';
import { MatCalendar, MatDatepicker, MatDatepickerInputEvent, MatDateSelectionModel } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';
import { JALALI_MOMENT_FORMATS } from '../mat-core/jalali_moment_formats';
import { TranslateService } from '@ngx-translate/core';

import * as moment from 'moment';
import { convertCalender, convertCalenderService } from '../mat-core/active-calender-token';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HeaderCalenderComponent } from '../app.component';


@Component({
  selector: 'app-date-picker-persian',
  templateUrl: './date-picker-persian.component.html',
  styleUrls: ['./date-picker-persian.component.scss'],
    providers:[
      { provide: DateAdapter, useClass: JalaliMomentDateAdapter, deps: [MAT_DATE_LOCALE] },
      { provide: MAT_DATE_FORMATS, useValue: JALALI_MOMENT_FORMATS },
    ]
})
export class DatePickerPersianComponent<D> implements OnInit {
  calendarHeaderComponent : any = HeaderCalenderComponent;
  public languageList : string[] = [];
  @Output() setDate = new EventEmitter();
  dateConvert;
  constructor(private dateAdapter:JalaliMomentDateAdapter ,
    private translate: TranslateService,
    private convertCalenderToken : convertCalender,
    private convertdateService : convertCalenderService,
    private dateAdaptorCostum : DateAdapter<D>
     ) { }

  startDate = jmoment('2017-01-01', 'YYYY-MM-DD');
  minDate = jmoment('2017-10-02', 'YYYY-MM-DD');
  maxDate = jmoment('1396-07-29', 'jYYYY-jMM-jDD');
  jsonDate = '2017-10-19T12:19:48.817';

  weeksInJalali = [
    { enName: 'Saturday', faName: 'شنبه', faAbbr: 'ش', order: 0 },
    { enName: 'Sunday', faName: 'یکشنبه', faAbbr: 'ی', order: 1 },
    { enName: 'Monday', faName: 'دوشنبه', faAbbr: 'د', order: 2 },
    { enName: 'Tuesday', faName: 'سه شنبه', faAbbr: 'س', order: 3 },
    { enName: 'Wednesday', faName: 'چهارشنبه', faAbbr: 'چ', order: 4 },
    { enName: 'Thursday', faName: 'پنجشنبه', faAbbr: 'پ', order: 5 },
    { enName: 'Friday', faName: 'جمعه', faAbbr: 'ج', order: 6 }
  ];

  monthsInJalali = [
    { faName: 'فروردین', order: 0 },
    { faName: 'اردیبهشت', order: 1 },
    { faName: 'خرداد', order: 2 },
    { faName: 'تیر', order: 3 },
    { faName: 'مرداد', order: 4 },
    { faName: 'شهریور', order: 5 },
    { faName: 'مهر', order: 6 },
    { faName: 'آبان', order: 7 },
    { faName: 'آذر', order: 8 },
    { faName: 'دی', order: 9 },
    { faName: 'بهمن', order: 10 },
    { faName: 'اسفند', order: 11 }
  ];
  filter = ((d: jmoment.Moment) : boolean | null => {
    const day: number = d.day();
    // Prevent Thursday and Friday from being selected.
    return day !== 5 && day !== 4;
  })
  // myFilter = (d: jmoment.Moment): DateFilterFn<jmoment.Moment | null> => {
  //   return this.filter
  // }
  ngOnInit() {
    //debugger
    HeaderCalenderComponent.activeCalender = 'Persian'
   // this.languageList = Object.values(Languages).filter(String);
    console.log(this.languageList);
    this.convertCalenderToken.getConvertCalender().subscribe((data) => {
      console.log('date en',data);
      this.dateConvert = data;
    })
  }

  onInput(event: MatDatepickerInputEvent<jmoment.Moment>) {
    var y = moment(event.value.toLocaleString()).format('DD/MM/YYYY');
    console.log(event.value);
    
    console.log('ger' , y);
    
    console.log('onInput: ', event.value.toISOString());
    this.setDate.emit(event.value.toISOString())
    this.convertdateService.getDateToConvert(event.value.toISOString())
  }
  onChange(event : MatDatepickerInputEvent<jmoment.Moment>) {
    const x =  jmoment(event.value).format('jYYYY/jMM/jDD');
    console.log('onChange: ', x);
  }
  useLanguage(language: string): void {
      this.dateAdapter.setLocale(language);
      //this.translate.use(language);
      //  this.activeCalendarToken.next(language)
      // this.activeCalendarToken.setActiveCalender(language)
  }
  todayClicked(){
    var today = new Date;
    console.log(today);
    this.dateAdaptorCostum.today()
    //this.dateConvert = jmoment(today.toISOString())
  }
}



