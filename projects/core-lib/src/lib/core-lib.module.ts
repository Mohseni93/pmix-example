import { NgModule } from '@angular/core';
import { CoreLibComponent } from './core-lib.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { DatePickerComponent } from './date-picker/date-picker.component';



@NgModule({
  declarations: [
    CoreLibComponent,
    ShowDataComponent,
    DatePickerComponent
  ],
  imports: [
  ],
  exports: [
    CoreLibComponent,
    ShowDataComponent
  ]
})
export class CoreLibModule { }
