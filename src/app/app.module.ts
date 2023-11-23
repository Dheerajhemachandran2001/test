import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MealService } from './service/meal.service';
import { ContainerComponent } from './pages/single-page/container/container.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SinglePageComponent,
    SearchBarComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
