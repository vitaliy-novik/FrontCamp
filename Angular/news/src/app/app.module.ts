import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { FeedComponent } from './feed/feed.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Routes, RouterModule } from '@angular/router';
import { EditArticleComponent } from './edit-article/edit-article.component';

const AppRoutes: Routes = [
    { path: "", component: FeedComponent },
    { path: "feed", component: FeedComponent },
    { path: "article/:id", component: ArticleComponent },
    { path: "article/edit/:id", component: EditArticleComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    FeedComponent,
    SynopsisComponent,
    ToolbarComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
