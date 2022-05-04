import { Injectable } from '@angular/core';
import { Object } from 'src/app/models/city/object.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private urlAPI = 'https://jsonplaceholder.typicode.com/todos'
  
  constructor(private http:HttpClient) {}

  getAllObjects():Observable<Object[]> {
    return this.http.get<Object[]>(this.urlAPI);
  }
}
