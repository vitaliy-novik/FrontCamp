import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import Source from './models/source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title: string = 'News';

    constructor(private apiService: ApiService){

    }

    onTitleChanged(name:string){
        this.title = name;
    }

    ngOnInit(){
        this.apiService.updateSelectedSource.subscribe((source: Source) => 
        {
            this.title = source.name;
        });
    }

}
