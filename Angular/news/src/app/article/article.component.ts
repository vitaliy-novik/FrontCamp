import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Article from '../models/article';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    private id: string;
    public article: Article;

    constructor(
      private route: ActivatedRoute,
      private apiService: ApiService) {
    }

    delete(id: string) {
        this.apiService.deleteArticle(id).subscribe(null, null, () => {
            this.article._id = null;
        })
    }

    ngOnInit() {
        this.id = this.route.snapshot.params["id"];
        this.apiService.getArticle(this.id).subscribe((resp: any) => {
            this.article = resp.data;
        });
    }
}
