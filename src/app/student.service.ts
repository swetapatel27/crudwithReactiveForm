import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Istudent } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public _url = "https://api-mstud.herokuapp.com/";

  constructor(private _http:HttpClient) { }


  getstud():Observable<Istudent[]>{
   return this._http.get<Istudent[]>(this._url+"display");
  }


  save(stud:Istudent){
    return this._http.post(this._url + "addstud",stud);
  }


  delstud(id){
    return this._http.delete(this._url +"delete/"+id);
  }


  updatestud(stud){
    return this._http.put(this._url +"updatestud",stud);
  }


}
