import { Inject, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Optional } from '@angular/core';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DateAdapter, MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatCalendar, MatDatepicker } from '@angular/material/datepicker';
import { MatRadioButton } from '@angular/material/radio';
import { CoreLibService } from 'core-lib';
import * as moment from 'moment';
import { Moment } from 'moment';
import * as jmoment from 'jalali-moment';
import {  ActiveCalender, convertCalender} from './mat-core/active-calender-token';
export enum Languages {
  en = 'Gregorian',
  fa = 'Persian'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ag-grid-app';
  languageList : string[];
  activeCalender : string = 'Persian'
  @ViewChild('radioButton') radioButton : MatRadioButton;
  constructor(private coreService : CoreLibService,
   private activeCalenderToken : ActiveCalender){
    this.title = this.coreService.hello();
  }
  ngOnInit(): void {
    this.languageList = Object.values(Languages).filter(String);
    this.activeCalenderToken.getActiveCalender().subscribe((active)=> {
      if(active)
        this.activeCalender = active;
    })
  }
  headerComponet : HeaderCalenderComponent<Moment>;
  useLanguage(language){
      this.activeCalender = language;

  }
  checkBoxSelected(lang){
    this.activeCalender = lang;
  }
  setDateEn(event){
  }
}



@Component({
  selector: 'app-header-calender',
  template: `
    <div class="row m-0 row-header-calender">
  <div class="col-sm-10 p-0">
    <mat-select placeholder="Calendar" [formControl]="calendar" (selectionChange)="selectedChange($event)">
      <mat-option *ngFor="let cal of supportedCalendars" [value]="cal">{{cal}}</mat-option>
    </mat-select>
  </div>
  <div class="col-sm-2 p-0">
    <button mat-mini-fab color="primary" (click)="todayClicked()">
        <!-- <span *ngIf="currentCalender == 'Persian'">امروز</span>
        <span *ngIf="currentCalender == 'Gregorian'">Today</span> -->
      <mat-icon>access_time</mat-icon>
    </button>
  </div>
</div>
<mat-calendar-header></mat-calendar-header>
  `,
  styleUrls: ['./header-calender.component.scss']
})
export class HeaderCalenderComponent<Moment> implements OnInit {
 public static activeCalender : string
  calendar: UntypedFormControl;
  form: UntypedFormGroup;
  supportedCalendars = ['Gregorian', 'Persian'] ;
  currentCalender : string = 'Persian';
  dateGregorean;
  datePersian;
  constructor( private calendarActive: MatCalendar<Moment>,
    @Inject(UntypedFormBuilder) private fb: UntypedFormBuilder,
              private activeCalenderToken : ActiveCalender,
              private dateAdapter: DateAdapter<Moment>,
              private datepicker: MatDatepicker<Moment>,
              @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats,
              private convertCalenderToken : convertCalender,
              private activeCalenders : ActiveCalender
             
  ) {}

  ngOnInit(): void {
    this.calendar = new UntypedFormControl(HeaderCalenderComponent.activeCalender, Validators.required);
    this.form = this.fb.group({
      calendar: this.calendar
    });
    this.form.valueChanges.subscribe((data) => {
      this.activeCalenderToken.setActiveCalender(data.calendar)
    });
  }

  selectedChange(event){
    this.currentCalender = event.value;
    var date =this.calendarActive.activeDate
    var jDate = this.dateAdapter.format(this.calendarActive.activeDate , this.dateFormats.display.dateInput).toString()
    console.log('date gregorian Header',moment(date).toISOString())
    console.log('date persian Header',jmoment(jDate).toISOString())
    this.activeCalenders.setActiveCalender(event.value)
   if(event.value == 'Gregorian'){
      this.convertCalenderToken.setConvertCalender(moment(date).toISOString());
   }
   else if(event.value == 'Persian')
    this.convertCalenderToken.setConvertCalender(jmoment(jDate).toISOString())
  }

  todayClicked(){
    this.calendarActive.activeDate =
      this.dateAdapter.today();
      this.datepicker.select(this.dateAdapter.today());
      //this.datepicker.close();
  }
}