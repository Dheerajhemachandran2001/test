import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './pages/main-page/sharepage/navbar/navbar.component';
import { FooterComponent } from './pages/main-page/sharepage/footer/footer.component';
import { HomeComponent } from './pages/main-page/home/home.component';
import { DataService } from './service/data.service';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SinglePageComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
