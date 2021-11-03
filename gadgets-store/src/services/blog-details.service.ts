import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogDetailsService {

  constructor(private _http:HttpClient) { }

  public getResult(){
    return this._http.get('./assets/blog-info.json');
  }
}
