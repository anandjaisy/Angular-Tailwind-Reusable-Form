import { Component, OnInit } from '@angular/core';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { IGenericHttpClient } from '../../../projects/falcon-ng/tailwind/src/lib/service/http/igeneric-http-client';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import {
  MatTableConfig,
  MatTable,
} from '../../../projects/falcon-ng/core/src/lib/falcon-core/model/interface';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TableActionMenuComponent } from './table-action-menu/table-action-menu.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    imports: [
        FalconTailwindModule,
        CodeGeneratorComponent,
        HighlightModule,
        CodeButtonComponent,
        TablePaginationComponent,
        TableFilterComponent,
        TableActionMenuComponent,
    ]
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [];
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  matTableConfig: MatTableConfig = {};
  columns: MatTable[] = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: any) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: any) => `${element.name}`,
    },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: any) => `${element.weight}`,
    },
    {
      columnDef: 'symbol',
      header: 'Symbol',
      cell: (element: any) => `${element.symbol}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  constructor(private iGenericHttpClient: IGenericHttpClient<any>) {}
  ngOnInit(): void {
    this.matTableConfig.columns = this.columns;
    this.matTableConfig.filter = false;
    this.matTableConfig.dataSource = this.dataSource;

    this.iGenericHttpClient.get('/category').subscribe(item => {});
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Table_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Table_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
