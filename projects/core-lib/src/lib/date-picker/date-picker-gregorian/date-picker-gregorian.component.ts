import { Component, OnInit } from '@angular/core';
import { HeaderCalenderComponent } from '../date-picker.component';
import { convertCalender } from '../mat-core/active-calender-token';

@Component({
  selector: 'app-date-picker-gregorian',
  templateUrl: './date-picker-gregorian.component.html',
  styleUrls: ['./date-picker-gregorian.component.scss']
})
export class DatePickerGregorianComponent implements OnInit {
  calendarHeaderComponent = HeaderCalenderComponent;
  dateConvert;
  constructor( private convertCalenderToken : convertCalender) { }

  ngOnInit(): void {
    HeaderCalenderComponent.activeCalender = 'Gregorian'
    //debugger
    this.convertCalenderToken.getConvertCalender().subscribe((data) => {
      console.log('date en',data);
      this.dateConvert = data;
    })
  }

}
