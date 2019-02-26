import { Component, OnInit, Input } from '@angular/core';
import Article from '../models/article';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-synopsis',
    templateUrl: './synopsis.component.html',
    styleUrls: ['./synopsis.component.css']
})
export class SynopsisComponent implements OnInit {

    @Input() article: Article;

    constructor(private apiService: ApiService) { }

    save(article: Article) {
        this.apiService.saveArticle(article).subscribe((resp: any) => {
            this.article = resp.data;
        });
    }

    delete(id: string) {
        this.apiService.deleteArticle(id).subscribe(null, null, () => {
            this.article._id = null;
        })
    }

    ngOnInit() {
    }

}
