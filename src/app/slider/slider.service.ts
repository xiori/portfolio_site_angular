import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SliderService {

  homeResult = new Subject<any>();
  constructor(private http: HttpClient) {

  }

  fetchHomes(){
    this.http.get<any>('http://localhost:3000/api/v1/homes')
    .pipe(map(resultData => {
      return resultData.map(home => home);
    }))
    .subscribe(transformData => {
      this.homeResult.next(transformData);
    });
  }

}
