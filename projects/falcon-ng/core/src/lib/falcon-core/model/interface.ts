import { HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { LoggingLevel } from './enum';
/**
 * @description
 * Interface use for IRequestOptions.
 * @usageNotes
 * ```ts
 *       {
 *        headers : "application/json",
 *        observe : "body",
 *        params : {},
 *        reportProgress : true,
 *        responseType : "application/json",
 *        withCredentials : true,
 *        body : {"username" : "test@test.com", "password": "xxxxxx"},
 *       }
 * ```
 */
export declare interface IRequestOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe?: 'body' | 'events' | 'response';
  params?: HttpParams | { [param: string]: string | string[] };
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
  body?: any;
}

/**
 * @description
 * Interface use for mat table header and column.
 * @usageNotes
 * ```ts
 *       columns: MatTable[] = [
 *        {
 *          columnDef: 'position',
 *          header: 'No.',
 *          cell: (element: any) => `${element.position}`
 *          }
 *      ]
 * ```
 */
export declare interface MatTable {
  columnDef?: string;
  header?: string;
  cell?: any;
  link?: IRouteLink;
}

/**
 * @description
 * Interface use for mat table configuration.
 * @usageNotes
 * ```ts
 *       {
 *          columns : MatTable[] = [{
 *            columnDef: 'position',
 *            header: 'No.',
 *            cell: (element: any) => `${element.position}`
 *        }, filter : true,
 *           pagination : true
 *        ]}
 * ```
 */
export declare interface MatTableConfig {
  columns?: MatTable[];
  dataSource?: any;
  filter?: boolean;
  paginationConfig?: MatTablePaginationConfig;
  progressBar?: boolean;
  action?: ITableAction;
  property?: IMatTableStyle;
}

/**
 * @description
 * Interface use for mat table style
 */
export declare interface IMatTableStyle {
  css?: string;
  style?: string;
}

/**
 * @description
 * Interface use for mat table pagination configuration.
 */
export declare interface MatTablePaginationConfig {
  pagination?: boolean;
  pageSizeOptions?: number[];
}
/**
 * @description
 * Interface use for mat table action button configuration.
 * view - action for view only
 * edit - action for edit the row
 * delete - action for delete the row
 * menu - context menu for more action
 */
export declare interface ITableAction {
  view?: boolean;
  edit?: boolean;
  delete?: boolean;
  arrowRight?: boolean;
  isMenu: boolean;
  menu?: IMatHint[];
}

/**
 * @description
 * Interface use for material hint component.
 */
export declare interface IMatHint {
  isIcon: boolean;
  icon?: IIcon;
  text?: string;
  link?: IRouteLink;
  disabled?: boolean;
  show?: boolean;
}

/**
 * @description
 * Interface for icons
 */
export declare interface IIcon {
  iconText?: string;
  iconColor?: string;
}

/**
 * @description
 * Interface for routerLink
 */
export declare interface IRouteLink {
  routerLink: string | any;
  queryParams?: string;
  isLink?: boolean;
}

/**
 * @description
 * Interface for Dialog Data
 */
export declare interface IDialogData {
  title: string;
  cancelBtnText: string;
  mainbtnText?: string;
  bodyMessage?: string;
}
/**
 * @description
 * Interface use for setting the suffix and prefix.
 * @usageNotes
 * ```ts
 *       new Textbox({
 *        label: "Prefix & Suffix icon",
 *        appearance: Appearance.Outline,
 *        placeHolder: "Prefix & Suffix icon",
 *        attrType: InputTypes.Text,
 *        prefix : {
 *          isIcon : true,
 *          text : "euro"
 *        },
 *        suffix : {
 *          isIcon: true,
 *          text : "done"
 *        }
 *      });
 * ```
 */
export declare interface ISuffixPrefixConfig {
  isIcon?: boolean;
  text?: string;
  toolTipText?: string;
}

/**
 * @description
 * Interface use for an app setting configuration.
 */
export declare interface IAppSettingViewModel {
  baseUrl?: string;
  loggingLevel?: LoggingLevel;
}

/**
 * View model for snack bar Message and Action Text
 */
export interface SnackbarModel {
  messageText: string;
  actionText: string;
}

/**
 * @description
 * Interface use for setting the TextArea Property.
 * @usageNotes
 * ```ts
 *       componentProperty: {
 *        textAreaProperty : {
 *          cdkTextareaAutosize : true,
 *          cdkAutosizeMinRows : 1,
 *          cdkAutosizeMaxRows : 2,
 *          rows : 2,
 *          cols : 2
 *        }
 *      }
 * ```
 */
export declare interface ITextAreaProperty {
  cdkTextareaAutosize?: boolean;
  cdkAutosizeMinRows?: number;
  cdkAutosizeMaxRows?: number;
  rows?: number;
  cols?: number;
}

/**
 * @description
 * Interface use for setting the options meta for select control.
 * @usageNotes
 * ```ts
 *       componentProperty: {
 *        selectProperty: {multiple : true};
 *      }
 * ```
 */
export declare interface ISelectOptions {
  single?: boolean;
  multiple?: boolean;
}

/**
 * @description
 * Interface use for setting the options meta.
 * Disable is used for select option values
 * @usageNotes
 * ```ts
 *       componentProperty: {
 *        options: [{key : 'key-1', value : 'value-1', icon: 'material_icon', disabled: true}];
 *      }
 * ```
 */
export declare interface IOptions {
  key?: any;
  value?: any;
  icon?: string;
  class?: string;
  disabled?: boolean;
}

/**
 * @description
 * @param change change event for the control
 * @param click click event for the control
 * Events for controls
 */
export declare interface IComponentEvent<T> {
  change?: EventEmitter<T>;
  click?: EventEmitter<T>;
  keyboardEnter?: EventEmitter<T>;
}
/**
* @description
* Interface use for setting the Mat Slider Property.
* @usageNotes
* ```ts
*       componentProperty: {
*        sliderProperty : {
*          invert : true,
*          step : 1,
*          thumbLabel : false,
*          vertical : true,
*          horizontal : false
*        }
*      }
* ```
*/
export declare interface ISliderProperty {
  invert?: boolean;
  thumbLabel?: boolean;
  vertical?: boolean;
  min?: number;
  max?: number;
  step?: number;
  tickInterval?: string | number;
}

/**
* @description
* Interface use for mat table header and column.
* @usageNotes
* ```ts
*       columns: MatTable[] = [
*        {
*          columnDef: 'position',
*          header: 'No.',
*          cell: (element: any) => `${element.position}`
*          }
*      ]
* ```
*/
export declare interface MatTable {
  columnDef?: string;
  header?: string;
  cell?: any;
  link?: IRouteLink;
}
