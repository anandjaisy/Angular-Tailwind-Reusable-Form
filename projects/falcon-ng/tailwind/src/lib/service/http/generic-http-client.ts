import { HttpClient, HttpRequest, HttpEventType, HttpEvent, HttpStatusCode } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { IGenericHttpClient } from './igeneric-http-client';
import { Injectable } from '@angular/core';
import {IRequestOptions, SnackbarModel, HttpMethod} from '@falcon-ng/core';
import { LoggerService } from '../logger.service';
import {EnvironmentViewModel} from "../../model/environments";
import {MatSnackBar} from "@angular/material/snack-bar";
@Injectable({
  providedIn: 'root'
})
export class GenericHttpClient<T> implements IGenericHttpClient<T>{
  private snackBarViewModel: SnackbarModel = {} as SnackbarModel;
  private isHttpError: boolean = false;

  constructor(private httpClient: HttpClient, private environment: EnvironmentViewModel,
    private _snackBar: MatSnackBar, private logger: LoggerService) { }


  /**
  * @description
  * Generic Http GET method to Get the response and bind to the view model
  * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
  * @param {IRequestOptions} options options of the request like headers, body, etc.
  * @returns {Observable<T>}
  * @usageNotes
  * The following snippet shows how to use this method
  * ```ts
  *    this.genericHttpService.Get("get_url").subscribe(data => {
  *        console.log('success');
  *      }, error => {
  *      console.log(error);
  *      });
  * ```
*/
  public get(destinationUrl: string, options?: IRequestOptions | any): Observable<T> {
    return this.request<T>(HttpMethod.Get, destinationUrl, options);
  }

  /**
    * @description
    * Generic Http post method to post the view model and bind the return view model
    * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
    * @param {IRequestOptions} options options of the request like headers, body, etc.
    * @returns {Observable<T>}
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpClientService.Post(post-url,post-view-model).subscribe(item => {
    *        console.log(item);
    *      },
    *      err => {
    *        console.log(err);
    *      });
    * ```
  */
  public post(destinationUrl: string, options?: IRequestOptions | any): Observable<T> {
    return this.request<T>(HttpMethod.Post, destinationUrl, options);
  }

  /**
    * @description
    * Generic Http Put method to post the view model and bind the return view model
    * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
    * @param {IRequestOptions} options options of the request like headers, body, etc.
    * @returns {Observable<T>}
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpClientService.Put(post-url, post-view-model).subscribe(item => {
    *        console.log(item);
    *      },
    *      err => {
    *        console.log(err);
    *      });
    * ```
  */
  public put(destinationUrl: string, options?: IRequestOptions | any): Observable<T> {
    return this.request<T>(HttpMethod.Put, destinationUrl, options);
  }

  /**
      * @description
      * Generic Http post method to post the view model and bind the return view model
      * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
      * @param {IRequestOptions} options options of the request like headers, body, etc.
      * @returns {Observable<T>}
      * @usageNotes
      * The following snippet shows how to use this method
      * ```ts
      *    this.genericHttpClientService.Post(post-url,post-view-model).subscribe(item => {
      *        console.log(item);
      *      },
      *      err => {
      *        console.log(err);
      *      });
      * ```
    */
  public patch(destinationUrl: string, options?: IRequestOptions | any): Observable<T> {
    return this.request<T>(HttpMethod.Patch, destinationUrl, options);
  }

  /**
    * @description
    * Generic Http Delete method to Delete the item and bind the return view model
    * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
    * @param {IRequestOptions} options options of the request like headers, body, etc.
    * @returns {Observable<T>}
    * @usageNotes
    * The following snippet shows how to use this method
    * ```ts
    *    this.genericHttpClientService.Delete(this.deleteUserUrl).subscribe(item => {
    *         console.log('success');
    *      }, error => {
    *        console.log(error);
    *      });
    * ```
  */
  public delete(destinationUrl: string, options?: IRequestOptions | any): Observable<T> {
    return this.request<T>(HttpMethod.Delete, destinationUrl, options);
  }

  /**
      * @description
      * Http request method to accept different method type and params
      * @param {string} method Http methods - GET, POST, PUT, DELETE.
      * @param {string} destinationUrl endPoint it doesn't need / in front of the end point.
      * @param {IRequestOptions} options options of the request like headers, body, etc.
      * @returns {Observable<T>}
      * @usageNotes
      * The following snippet shows how to use this method
      * ```ts
      *    this.request<T>(HttpMethod.Delete, destinationUrl, options);
      * ```
    */
  private request<T>(method: string, url: string, options?: IRequestOptions): Observable<T> {
    return Observable.create((observer: any) => {
      let destinationUrl = '';
      if (this.environment.baseUrl != undefined)
        destinationUrl = (this.environment.baseUrl) + url
      else
        destinationUrl = url
      this.httpClient.request<T>(new HttpRequest(method, destinationUrl, options)).subscribe(
        (response: any) => {
          const responsTye = response as HttpEvent<any>
          switch (responsTye.type) {
            case HttpEventType.Sent:
              this.logger.info('Http Client : Sent ->', 'Request sent!');
              break;
            case HttpEventType.ResponseHeader:
              this.logger.info('Http Client : ResponseHeader ->', 'Response header received!');
              break;
            case HttpEventType.DownloadProgress:
              const kbLoaded = Math.round(responsTye.loaded / 1024);
              this.logger.info('Http Client : DownloadProgress ->', `Download in progress! ${kbLoaded}Kb loaded`);
              break;
            case HttpEventType.Response:
              observer.next(response.body);
              this.logger.info('Http Client : Response -> 😺 Done!', responsTye.body);
          }
        },
        (error) => {
          switch (error.status) {
            case HttpStatusCode.Forbidden:
              // observer.complete();
              this.snackBarViewModel.messageText = 'Access to the requested resource is forbidden.';
              this.snackBarViewModel.actionText = 'Forbidden';
              this.isHttpError = true;
              break;
            case HttpStatusCode.BadRequest:
              this.snackBarViewModel.messageText = 'Server cannot or will not process the request.';
              this.snackBarViewModel.actionText = 'Bad Request';
              this.isHttpError = true;
              break;
            case HttpStatusCode.Unauthorized:
              this.snackBarViewModel.messageText = 'Request has not been applied because it lacks valid authentication credentials.';
              this.snackBarViewModel.actionText = 'Unauthorized';
              this.isHttpError = true;
              break;
            case HttpStatusCode.InternalServerError:
              this.snackBarViewModel.messageText = 'Server encountered an unexpected condition.';
              this.snackBarViewModel.actionText = 'Internal server error';
              this.isHttpError = true;
              break;
            case 0:
              this.snackBarViewModel.messageText = 'Not connected to the service.';
              this.snackBarViewModel.actionText = 'Service not available';
              this.isHttpError = true;
              break;
          }
          observer.error(error);
          if ((this.environment.snackBarEnable != undefined && this.environment.snackBarEnable) && this.isHttpError)
            this._snackBar.open(this.snackBarViewModel.messageText, this.snackBarViewModel.actionText);
        }
      );
    });
  }
}
