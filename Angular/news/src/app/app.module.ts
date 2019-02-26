import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { FeedComponent } from './feed/feed.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Routes, RouterModule } from '@angular/router';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { FilterPipe } from './pipes/filter.pipe';

const AppRoutes: Routes = [
    { path: "", component: FeedComponent },
    { path: "feed", component: FeedComponent },
    { path: "article/:id", component: ArticleComponent },
    { path: "edit/:id", component: EditArticleComponent },
    { path: "create", component: EditArticleComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    FeedComponent,
    SynopsisComponent,
    ToolbarComponent,
    EditArticleComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
