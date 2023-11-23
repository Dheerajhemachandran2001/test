import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

  export class MainPageComponent implements OnInit {

    constructor(private service: DataService) { }
  
    
  items: { strMeal: string }[] = [];
  searchQuery: string = '';
  searchResults: { strMeal: string, strMealThumb: string, idMeal:any }[] = [];
  
    ngOnInit(): void {
     
      this.search();
    }

    search(): void {
      if (this.searchQuery.trim() !== '') {
        this.service.searchMeals(this.searchQuery).subscribe((result) => {
          console.log(result, 'search result');
          this.searchResults = result.meals || [];
        });
      } else { 
        this.searchResults = [];
      }
    }
  }