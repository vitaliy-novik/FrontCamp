import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Source from '../models/source';
import Article from '../models/article';
import News from '../models/news';

const apiKey = "42550f2e240d4605a04069e84d56aaa2";
const apiNewsBaseUrl = "https://newsapi.org/";
const localNewsBaseUrl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  selectedSourceId: string;

  constructor(private http: HttpClient) { }

  public updateSelectedSource: EventEmitter<Source> = new EventEmitter();

  selectSource(source: Source) {
    this.selectedSourceId = source.id;
    this.updateSelectedSource.emit(source);
  }

  getNews(pageSize: number, pageNumber: number){
    let url: string = `${apiNewsBaseUrl}v2/top-headlines?apiKey=${apiKey}&pageSize=${pageSize}&page=${pageNumber}`;
    if (this.selectedSourceId) {
      url += `&sources=${this.selectedSourceId}`;
    }

    return this.http.get<News>(url);
  }

  getSources(){
    return this.http.get<Source>(`${apiNewsBaseUrl}v2/sources?language=en&apiKey=${apiKey}`);
  }

  saveArticle(article: Article) {
    return this.http.post<Article>(`${localNewsBaseUrl}/news`, article);
  }

  deleteArticle(id: string) {
    return this.http.delete<any>(`${localNewsBaseUrl}/news/${id}`);
  }

  getArticle(id: string) {
    return this.http.get<Article>(`${localNewsBaseUrl}/news/${id}`);
  }

  updateArticle(article: Article): any {
    return this.http.put<Article>(`${localNewsBaseUrl}/news/${article._id}`, article);
  }
}
