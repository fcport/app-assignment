import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../common/model/country';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _data = new BehaviorSubject<{
    name: string;
    username?: string;
    location: {
      country: Country;
      postCode?: string;
    };
    favouriteMovie?: string;
  } | null>(null);

  data = this._data.asObservable();

  constructor() {}

  pushNewData(data: {
    name: string;
    username?: string;
    location: {
      country: Country;
      postCode?: string;
    };
    favouriteMovie?: string;
  }) {
    this._data.next(data);
  }
}
