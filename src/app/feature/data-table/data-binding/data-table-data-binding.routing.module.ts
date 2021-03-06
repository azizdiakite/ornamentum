import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoGuard } from '../../../core/seo.guard';

/**
 * Represent data table data binding routes.
 */
const dataTableDataBindingRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'client-side/basic'
  },
  {
    loadChildren: './data-table-client-side-basic/data-table-client-side-basic.module#DataTableClientSideBasicModule',
    // loadChildren: () => import('./data-table-client-side-basic/data-table-client-side-basic.module')
    //   .then((m) => m.DataTableClientSideBasicModule),
    path: 'client-side/basic',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Data Binding | Client Side | Basic Data Binding',
        // tslint:disable-next-line
        keywords: 'data table client side basic data binding,data table client side data binding,data table basic data binding,grid client data binding',
        // tslint:disable-next-line
        description: 'Client side data binding allows the users to bind static data sets to the data table when the full data collection is available in the client side. It can be configured via setting an array of data objects to items input property or by setting a RxJS Observable stream to dataSource input property.'
      }
    }
  },
  {
    loadChildren: './data-table-client-side-stream/data-table-client-side-stream.module#DataTableClientSideStreamModule',
    // loadChildren: () => import('./data-table-client-side-stream/data-table-client-side-stream.module')
    //   .then((m) => m.DataTableClientSideStreamModule),
    path: 'client-side/stream',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Data Binding | Client Side | Stream Data Binding',
        // tslint:disable-next-line
        keywords: 'data table client side stream data binding,data table reactive stream binding,data table stream data binding,grid stream data binding',
        // tslint:disable-next-line
        description: 'Client side stream data binding technique can be used to bind data sources which changes rapidly. Data changes notified by data source will automatically get reflected while persisting the current table state without having to manually trigger refresh.'
      }
    }
  },
  {
    loadChildren:
      './data-table-server-side-basic/data-table-server-side-basic.module#DataTableServerSideBasicModule',
    // loadChildren: () => import('./data-table-server-side-basic/data-table-server-side-basic.module')
    //   .then((m) => m.DataTableServerSideBasicModule),
    path: 'server-side/basic',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Data Binding | Server Side | Basic Data Binding',
        // tslint:disable-next-line
        keywords: 'data table server side data binding,data table server binding,data table ajax,data table http,grid server side data binding',
        // tslint:disable-next-line
        description: 'Server side data binding allow users to bind large data sets that are not directly accessible as a full collection in client side due to various reasons. Server side data binding can improve performance drastically for large data sets but integration is fairly complex compared to Client Side Basic and Client Side Stream Data Binding techniques.'
      }
    }
  },
  {
    loadChildren:
      './data-table-server-side-web-socket/data-table-server-side-web-socket.module#DataTableServerSideWebSocketModule',
    // loadChildren: () => import('./data-table-server-side-web-socket/data-table-server-side-web-socket.module')
    //   .then((m) => m.DataTableServerSideWebSocketModule),
    path: 'server-side/web-socket',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Data Binding | Server Side | Web Socket Data Binding',
        // tslint:disable-next-line
        keywords: 'data table web socket,servers side web socket data binding,web socket data binding,server web socket data binding,server socket data binding',
        // tslint:disable-next-line
        description: 'Data table servers side web socket data binding allow users to create a live connection with the backend and fetch data changes in realtime.'
      }
    }
  },
  {
    loadChildren: './data-table-custom-data-provider/data-table-custom-data-provider.module#DataTableCustomDataProviderModule',
    path: 'custom-provider',
    canActivate: [SeoGuard],
    data: {
      seo: {
        title: 'Ornamentum - Data Table | Data Binding | Server Side | Custom Data Provider',
        keywords: 'custom data provider,customized data provider,data provider,custom data source provider,custom data binding',
        // tslint:disable-next-line
        description: 'Data table custom data source integration is supported via data bind hooks. This can be used to bind any data source, such as Firebase Realtime Database or Cloud Fire store.'
      }
    }
  }
];

/**
 * Data table advanced routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dataTableDataBindingRoutes)]
})
export class DataTableDataBindingRoutingModule {
}
