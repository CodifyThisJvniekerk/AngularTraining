import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  writelog(logText) {
    console.log(logText)
  }

}
