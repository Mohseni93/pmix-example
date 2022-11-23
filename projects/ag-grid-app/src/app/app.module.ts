import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoreLibModule } from 'core-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent, HeaderCalenderComponent } from './app.component';
import { DatePickerPersianComponent } from './date-picker-persian/date-picker-persian.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCoreModule } from './mat-core/mat-core.module';
import { DatePickerGregorianComponent } from './date-picker-gregorian/date-picker-gregorian.component';


@NgModule({
  declarations: [
    AppComponent,
    DatePickerPersianComponent,
    DatePickerGregorianComponent,
    HeaderCalenderComponent,
  ],
  imports: [
    BrowserModule,
    CoreLibModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCoreModule
  ],
  exports :[
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
