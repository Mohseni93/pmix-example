import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreLibService {

  constructor() { }
  hello(){
    return 'hello'
  }
}
