import { Injectable } from '@angular/core';
import { AppSetings } from '../config';
import { IConfig } from '../config.interface';

@Injectable()
export class ScreenwidthService {

  IConfig: IConfig;

  constructor(private appSetings: AppSetings) {
    this.IConfig = appSetings.IConfig;
  }

  checShow(params, width) {
    if( params === 'small' && width < this.IConfig.medium){
      return true;
    } else if( params === 'medium' &&  this.IConfig.medium <= width && width < this.IConfig.large){
      return true;
    } else if( params === 'large' && width >= this.IConfig.large){
      return true;
    } else {
      return false;
    }
  }

}
