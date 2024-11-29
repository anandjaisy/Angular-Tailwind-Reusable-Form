import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableConfig} from "@falcon-ng/core";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {TableAction} from "@falcon-ng/core";
@Component({
    selector: 'falcon-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    standalone: false
})
export class TableComponent implements OnInit {
  @Input() matTableConfig!: MatTableConfig;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @Output() pageEvent = new EventEmitter<PageEvent>();
  @Input() displayedColumns!: string[];
  @Output() tableActionRowEvent = new EventEmitter<any>();
  ngOnInit(): void {
    const cols = this.matTableConfig.columns?.map((c) => c.columnDef);
    if (this.displayedColumns !== undefined)
      this.displayedColumns.unshift(...cols as string[]);
    else this.displayedColumns = cols as string[];
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.matTableConfig.dataSource = new MatTableDataSource(
              this.matTableConfig.dataSource,
              );
      this.matTableConfig.dataSource.paginator = this.paginator;
      this.matTableConfig.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matTableConfig.dataSource.filter = filterValue
    .trim()
    .toLowerCase();

    if (this.matTableConfig.dataSource.paginator) {
      this.matTableConfig.dataSource.paginator.firstPage();
    }
  }

  public page(e: any) {
    this.pageEvent.emit(e);
  }

  public tableAction($item: any, action: TableAction) {
    const item = Object.assign($item, { action: action });
    this.tableActionRowEvent.next(item);
  }
}
