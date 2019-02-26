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

    public authorControl: FormControl = new FormControl('', Validators.required);
    public titleControl: FormControl = new FormControl('', Validators.required);
    public descriptionControl: FormControl = new FormControl('');
    public publishedAtControl: FormControl = new FormControl('');
    public contentControl: FormControl = new FormControl('');
    public sourceControl: FormControl = new FormControl('');
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
        this.apiService.updateArticle(this.form.value);
    }

    ngOnInit() {
        this.id = this.route.snapshot.params["id"];
        this.apiService.getArticle(this.id).subscribe((resp: any) => {
            this.article = resp.data;
            this.authorControl.setValue(this.article.author);
            this.titleControl.setValue(this.article.title);
            this.descriptionControl.setValue(this.article.description);
            this.publishedAtControl.setValue(this.article.publishedAt);
            this.contentControl.setValue(this.article.content);
            this.sourceControl.setValue(this.article.source.id);
        });

        this.apiService.getSources().subscribe((resp:any) => {
            this.sources = resp.sources;
        });
    }
}
