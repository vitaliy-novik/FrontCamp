import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommunicationService } from '../services/communication.service';
import Source from '../models/source';
import Article from '../models/article';
import News from '../models/news';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    pageNumber: number = 1;
    pageSize: number = 5;
    articles: Article[] = [];
    hasMore: boolean = false;
    filterText: string;

    constructor(
        private apiService: ApiService,
        private communicationService: CommunicationService) {
    }

    loadNews() {
        this.apiService.getNews(this.pageSize, this.pageNumber).subscribe((news: News) => {
            this.articles.push(...news.articles);
            this.hasMore = news.totalResults > this.articles.length;
            this.pageNumber++;
        });
    }

    ngOnInit() {
        this.apiService.updateSelectedSource.subscribe((source: Source) => {
            this.articles = [];
            this.pageNumber = 1;
            this.loadNews();
        });
        this.apiService.switchLocal.subscribe((local: boolean) => {
            this.articles = [];
            this.pageNumber = 1;
            this.loadNews();
        });
        this.communicationService.onApplyFilter.subscribe((filterText: string) => {
            this.filterText = filterText;
        })
    }
}
