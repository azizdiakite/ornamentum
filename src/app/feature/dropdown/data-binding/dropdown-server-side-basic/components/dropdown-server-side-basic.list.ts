import { ExampleFile, FileType } from 'helper-models';

export const serverSideBasicUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'server-side-basic-usage.component.ts',
    content: require('!!raw-loader!./example/server-side-basic-usage/server-side-basic-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'server-side-basic-usage.component.html',
    content: require('!!raw-loader!./example/server-side-basic-usage/server-side-basic-usage.component.html')
  },
  {
    type: FileType.TS,
    name: 'server-side-basic-usage-usage.module.ts',
    content: require('!!raw-loader!./example/server-side-basic-usage/server-side-basic-usage.module.md')
  }
];

export const demoSnippet: any = {
  serverSideDataBinding: require('!!raw-loader!./docs/server-side-data-binding.md'),
  httpResourceService: require('!!raw-loader!projects/ornamentum/src/dropdown-resource/services/dropdown-http-resource.service.ts')
};
