// single-page.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MealService } from 'src/app/service/meal.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

interface MealDetails {
  meals: {
    strMeal: string;
    strInstructions: string;
  }[];
}

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  mealDetails: MealDetails = { meals: [] };

  constructor(private mealService: MealService,private route:ActivatedRoute) {}

  ngOnInit(): void {
  //   let mealId:any
  //   this.route.paramMap.subscribe((params:ParamMap)=>{
  //     mealId=(params.get("id"))
  //   })
  //   this.mealService.getMealById(mealId).subscribe(
  //     (data: MealDetails) => {
  //       this.mealDetails = data;
  //       console.log('Meal Details:', this.mealDetails);
  //     },
  //     (error: HttpErrorResponse) => { // Explicitly define the type as HttpErrorResponse
  //       console.error('Error fetching meal details:', error);
  //     }
  //   );
  }
}
