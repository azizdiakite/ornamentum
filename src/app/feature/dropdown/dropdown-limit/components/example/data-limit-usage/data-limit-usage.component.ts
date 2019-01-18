import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ExampleData } from '../../../../../../shared/models';
import { ResourceData } from '../../../../../../shared/models/resource-data.model';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-data-limit-usage',
  templateUrl: './data-limit-usage.component.html'
})
export class DataLimitUsageComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = this.dataFetchService.fetchDataFromServer().pipe(map((resource: ResourceData<ExampleData>) => {
      return resource.data;
    }));
  }
}
