import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import Source from './models/source';

const defaultTitle: string = 'News';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string = defaultTitle;
    sourceName: string = '';

    constructor(private apiService: ApiService){
    }

    ngOnInit(){
        this.apiService.updateSelectedSource.subscribe((source: Source) =>
        {
            this.sourceName = source.name;
            this.title = source.name;
        });
        this.apiService.switchLocal.subscribe((local: boolean) => {
            if (local) {
              this.title = 'Local news';
            } else {
              this.title = !this.sourceName ? defaultTitle : this.sourceName;
            }
        });
    }
}
