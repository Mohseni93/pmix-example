import { NgModule } from '@angular/core';
import { CoreLibComponent } from './core-lib.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { DatePickerComponent, HeaderCalenderComponent } from './date-picker/date-picker.component';
import { MatCoreModule } from './date-picker/mat-core/mat-core.module';
import { DatePickerGregorianComponent } from './date-picker/date-picker-gregorian/date-picker-gregorian.component';
import { DatePickerPersianComponent } from './date-picker/date-picker-persian/date-picker-persian.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CoreLibComponent,
    ShowDataComponent,
    DatePickerComponent,
    DatePickerGregorianComponent,
    DatePickerPersianComponent,
    HeaderCalenderComponent
  ],
  imports: [
    MatCoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    CoreLibComponent,
    ShowDataComponent,
    DatePickerGregorianComponent,
    DatePickerPersianComponent,
    DatePickerComponent
  ]
})
export class CoreLib1Module { }
