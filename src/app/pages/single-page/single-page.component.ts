import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent {
  constructor(private _route:ActivatedRoute){}

  ngOnInit(){
    this._route.paramMap.subscribe((params:ParamMap)=>{
      console.log(params.get("id"))   
    })
  }

}
