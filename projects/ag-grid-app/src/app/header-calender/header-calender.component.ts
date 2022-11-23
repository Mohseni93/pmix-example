import { Host, Optional } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DateAdapter, MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatCalendar, MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import * as jmoment from 'jalali-moment';
import { ActiveCalender, convertCalender } from '../mat-core/active-calender-token';




