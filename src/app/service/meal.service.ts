// meal.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {

  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private http: HttpClient) { }

  getMealById(mealId: string): Observable<any> {
    const url = `${this.apiUrl}lookup.php?i=${mealId}`;
    return this.http.get(url);
  }
}
