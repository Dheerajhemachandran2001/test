// container.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MealService } from 'src/app/service/meal.service';

interface MealDetails {
  meals: {
    strMealThumb: string;
    strMeal: string;
    strInstructions: string;
    strIngredient1?: string;
    strYoutube: string;
    // Add other properties as needed
  }[];
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  mealDetails: MealDetails = { meals: [] };

  constructor(private mealService:MealService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let mealId: any;
    this.route.paramMap.subscribe((params: ParamMap) => {
      mealId = params.get("id");
    });

    this.mealService.getMealById(mealId).subscribe(
      (data: MealDetails) => {
        this.mealDetails = data;
        console.log('Meal Details:', this.mealDetails);
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching meal details:', error);
      }
    );
  }

  getIngredients(meal: any): string[] {
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      } else {
        break; // Stop if there are no more ingredients
      }
    }
    return ingredients;
  }

  onYoutubeLinkHover(isHovered: boolean): void {
    const link = document.querySelector('.youtube-button') as HTMLElement;

    if (link) {
      link.style.backgroundColor = isHovered ? '#cc0000' : '#ff0000';
    }
  }
}
