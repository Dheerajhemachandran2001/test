import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  private apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=` ;

  searchMeals(query: string): Observable<any> {
    const searchUrl = `${this.apiUrl}${query}`;
    return this.http.get<any>(searchUrl);
  }

}
