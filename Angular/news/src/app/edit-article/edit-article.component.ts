import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import Source from '../models/source';
import { ActivatedRoute } from '@angular/router';
import Article from '../models/article';

@Component({
    selector: 'app-edit-article',
    templateUrl: './edit-article.component.html',
    styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
    id: string;
    article: Article;
    sources: Source[] = [];

    public authorControl: FormControl = new FormControl('');
    public titleControl: FormControl = new FormControl('', Validators.required);
    public descriptionControl: FormControl = new FormControl('');
    public publishedAtControl: FormControl = new FormControl('');
    public contentControl: FormControl = new FormControl('', Validators.required);
    public sourceControl: FormControl = new FormControl('', Validators.required);
    public form: FormGroup = new FormGroup({
        author: this.authorControl,
        title: this.titleControl,
        description: this.descriptionControl,
        publishedAt: this.publishedAtControl,
        content: this.contentControl,
        source: this.sourceControl
    });

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute) {
    }

    submitForm() {
      if (this.article && this.article._id) {
        this.article.author = this.authorControl.value;
        this.article.title = this.titleControl.value;
        this.article.description = this.descriptionControl.value;
        this.article.publishedAt = this.publishedAtControl.value;
        this.article.content = this.contentControl.value;
        this.article.source.id = this.sourceControl.value;
        this.article.source.name = this.sources.find(s => s.id == this.article.source.id).name;
        this.apiService.updateArticle(this.article).subscribe((resp: any) => {
          location.href = `http://localhost:4200/article/${this.article._id}`;
        });
      } else {
        this.apiService.saveArticle(this.form.value).subscribe((resp: any) => {
          location.href = `http://localhost:4200`;
        });
      }

    }

    ngOnInit() {
        this.id = this.route.snapshot.params["id"];
        if (this.id) {
          this.apiService.getArticle(this.id).subscribe((resp: any) => {
              this.article = resp.data;
              this.authorControl.setValue(this.article.author);
              this.titleControl.setValue(this.article.title);
              this.descriptionControl.setValue(this.article.description);
              this.publishedAtControl.setValue(new Date(this.article.publishedAt).toISOString().slice(0, -1));
              this.contentControl.setValue(this.article.content);
              this.sourceControl.setValue(this.article.source.id);
          });
        }

        this.apiService.getSources().subscribe((resp:any) => {
            this.sources = resp.sources;
        });
    }
}
