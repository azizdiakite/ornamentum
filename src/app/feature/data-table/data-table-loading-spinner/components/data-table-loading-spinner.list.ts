import { ExampleFile, FileType } from 'helper-models';

export const loadingSpinnerUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'loading-spinner-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/loading-spinner-usage/loading-spinner-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'loading-spinner-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/loading-spinner-usage/loading-spinner-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'loading-spinner-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/loading-spinner-usage/loading-spinner-usage.component.html')
  }
];

export const demoSnippet: any = {
  loadingSpinner: require('!!raw-loader?lang=typescript!./docs/show-loading-spinner.md')
};
