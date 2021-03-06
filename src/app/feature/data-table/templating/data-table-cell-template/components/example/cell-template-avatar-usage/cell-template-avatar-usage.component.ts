import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataTableRequestParams, DataTableQueryResult } from 'ornamentum';

@Component({
  selector: 'app-cell-template-avatar-usage',
  templateUrl: './cell-template-avatar-usage.component.html',
  styles: ['.highlight { color: lightblue; font-weight: bold;}']
})
export class CellTemplateAvatarUsageComponent {

  constructor(public http: HttpClient) {
  }

  /**
   * custom data provider need to return a function which is return an Observable out put
   * as long as your data return as observable you can use any data source
   * example : Firebase Realtime Database or Cloud Firestore
   */
  public onDataBind = (params: DataTableRequestParams): Observable<DataTableQueryResult<any>> => {
    const page = (params.offset + params.limit) / params.limit;
    const perPage = params.limit;
    let httpParams = new HttpParams();

    httpParams = httpParams
      .append('page', '' + page)
      .append('perPage', '' + perPage);

    return this.http.get('https://api.github.com/repos/yohangz/ornamentum/contributors', { params: httpParams })
      .pipe(map((res: any) => {

          /**
           * Items collection
           * items: T[];
           * Item count
           * count: number;
           */
          return {
            items: res,
            count: res.length
          };
        })
      ) as Observable<any>;
  };

}
