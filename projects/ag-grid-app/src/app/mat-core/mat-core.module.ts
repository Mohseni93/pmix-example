import { JALALI_MOMENT_FORMATS } from './jalali_moment_formats';
import { JalaliMomentDateAdapter } from './jalali-moment-date-adapter';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  MatAutocompleteModule,
} from '@angular/material/autocomplete';
import{ MatButtonModule } from '@angular/material/button';
import{ MatButtonToggleModule } from '@angular/material/button-toggle';
import{ MatCardModule } from '@angular/material/card';
import{ MatCheckboxModule } from '@angular/material/checkbox';
import{ MatChipsModule } from '@angular/material/chips';
import{ MatTableModule } from '@angular/material/table';
import{ MatDatepickerModule, MatDateSelectionModel } from '@angular/material/datepicker';
import{ MatDialogModule } from '@angular/material/dialog';
import{ MatExpansionModule } from '@angular/material/expansion';
import{ MatFormFieldModule } from '@angular/material/form-field';
import{ MatGridListModule } from '@angular/material/grid-list';
import{ MatInputModule } from '@angular/material/input';
import{ MatIconModule } from '@angular/material/icon';
import{ MatListModule } from '@angular/material/list';
import{ MatMenuModule } from '@angular/material/menu';
import{ MatPaginatorModule } from '@angular/material/paginator';
import{ MatProgressBarModule } from '@angular/material/progress-bar';
import{ MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import{ MatRadioModule } from '@angular/material/radio';
import{ MatSelectModule } from '@angular/material/select';
import{ MatSidenavModule } from '@angular/material/sidenav';
import{ MatSlideToggleModule } from '@angular/material/slide-toggle';
import{ MatSliderModule } from '@angular/material/slider';
import{ MatSnackBarModule } from '@angular/material/snack-bar';
import{ MatSortModule } from '@angular/material/sort';
import{ MatStepperModule } from '@angular/material/stepper';
import{ MatTabsModule } from '@angular/material/tabs';
import{ MatToolbarModule } from '@angular/material/toolbar';
import{ MatTooltipModule } from '@angular/material/tooltip';
import { CdkTableModule } from '@angular/cdk/table';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDatePickerAdapter, CUSTOM_DATE_FORMATS } from './date-adapter-custom';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeFa from '@angular/common/locales/fa';
import localeDeExtra from '@angular/common/locales/extra/de';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
// import { ACTIVE_CALENDAR } from './active-calender-token';
// registerLocaleData(localeEn, 'en');
// registerLocaleData(localeFa, 'fa', localeDeExtra);


@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    CdkTableModule,
    
  ],
  imports :[
    TranslateModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule
  ],
 providers:[
    // {provide: DateAdapter, useClass: CustomDatePickerAdapter},
    // {provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS},
    // { provide: DateAdapter, useClass: JalaliMomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    // { provide: MAT_DATE_FORMATS, useValue: JALALI_MOMENT_FORMATS },
    MatDatepickerModule, 
    MatNativeDateModule
 ],
 schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class MatCoreModule { 
  // constructor(private translate: TranslateService) {
  //   translate.addLangs(['en-US', 'fa-IR']);
  //   translate.setDefaultLang('en');
  //   translate.use('en');
  // }
}
