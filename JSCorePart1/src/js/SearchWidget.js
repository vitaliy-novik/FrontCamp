import CategoryFilter from './filters/CategoryFilter.js';
import Enum from './Enum.js';
import LanguageFilter from './filters/LanguageFilter.js';
import NewsClient from './NewsApiClient.js';
import SourcesFilter from './filters/SourcesFilter.js';
import { Loading } from './Utils.js';

export default class SearchWidget {
    constructor(callback) {
        this.callback = callback;
        this.newsClient = new NewsClient();
        this.languageFilter = new LanguageFilter(
            'languageFilter', this.onLanguageChanged.bind(this), Enum.Languages, Enum.Default.Language);
        this.categoryFilter = new CategoryFilter(
            'categoryFilter', this.onCategoryChanged, Enum.Categories);
        this.sourcesFilter = new SourcesFilter('sourcesFilter');
        
        this.searchParameters = {
            countries: [],
            language: Enum.Default.Language,
            categories: [],
            sources: [],
            query: ''
        };
    };

    draw() {
        document.getElementById("submitSearchButton").onclick = this.searchClickHandler.bind(this);
        this.languageFilter.draw();
        this.categoryFilter.draw();
        this.newsClient.getSources(
            this.searchParameters, 
            this.onSourcesChange.bind(this));
        Loading('sourcesFilter');
    };

    searchClickHandler () {
        this.searchParameters.query = document.getElementById("query").value;
        this.newsClient.getHeadlines(
            this.searchParameters, this.callback);
    };

    onLanguageChanged(language) {
        this.searchParameters.language = language;
        this.newsClient.getSources(
            this.searchParameters, 
            this.onSourcesChange.bind(this));
        Loading('sourcesFilter');
    }

    onSourcesChange(sources) {
        this.searchParameters.sources = sources;
        this.sourcesFilter.draw(sources);
        this.newsClient.getHeadlines(
            this.searchParameters, this.callback);
    }
}