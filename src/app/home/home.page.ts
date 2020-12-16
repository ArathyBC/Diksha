import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { SearchResult } from './search-result';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = "Subject";
  texts : Array <SearchResult> = []
  load = false;
  public topic: any;
  public newsData: any;
  constructor(public api:HomeService) {
    
  }
  
  loadComponent() {
    this.load= true;
  }
  search() {
    this.load = true;
    this.api.getNews(this.topic).subscribe(result=>{
      
      console.log(result);
    this.texts=result.results;
  console.log(this.texts);  
    
  });
  }

 
}

