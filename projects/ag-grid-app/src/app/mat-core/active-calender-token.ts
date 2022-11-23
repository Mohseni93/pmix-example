// import {InjectionToken} from '@angular/core';
// import {BehaviorSubject} from 'rxjs';

// export const ACTIVE_CALENDAR = new InjectionToken<BehaviorSubject<'en-US' | 'fa-IR' | string>>('Active Calendar');
import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveCalender {
  private _activeCalender = new BehaviorSubject<any>('')
  private _activeCalender$ = this._activeCalender.asObservable();
  getActiveCalender() : Observable<any>{
    return this._activeCalender$
  }
  setActiveCalender(lastValue : any){
    return this._activeCalender.next(lastValue);
  }
  ComplateActiveCalender(){
    return this._activeCalender.complete();
  }
}
@Injectable({
  providedIn: 'root'
})
export class convertCalender {
  private _convertCalender = new BehaviorSubject<any>('')
  private _convertCalender$ = this._convertCalender.asObservable();
  getConvertCalender() : Observable<any>{
    return this._convertCalender$
  }
  setConvertCalender(lastValue : any){
    return this._convertCalender.next(lastValue);
  }
  ComplateConvertCalender(){
    return this._convertCalender.complete();
  }
}
@Injectable({
  providedIn: 'root'
})
export class convertCalenderService{
  public getDateToConvert(date){
    return date
  }
}