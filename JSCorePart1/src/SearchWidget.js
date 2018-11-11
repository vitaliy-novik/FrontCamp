import CategoryFilter from './CategoryFilter.js';
import Enum from './Enum.js';
import LanguageFilter from './LanguageFilter.js';
import NewsClient from './NewsApiClient.js';
import SourcesFilter from './SourcesFilter.js';
import { Loading } from './Utils.js';

export default class SearchWidget {
    constructor(callback) {
        this.callback = callback;
        this.newsClient = new NewsClient();
        this.languageFilter = new LanguageFilter(
            'languageFilter', this.onLanguageChanged, Enum.Languages, Enum.Default.Language);
        this.categoryFilter = new CategoryFilter(
            'categoryFilter', this.onCategoryChanged, Enum.Categories);
        this.sourcesFilter = new SourcesFilter('sourcesFilter');
        
        this.searchParameters = {
            countries: [],
            language: Enum.Default.Language,
            categories: [],
            sources: []
        };
    };

    draw() {
        this.languageFilter.draw();
        this.categoryFilter.draw();
        this.newsClient.getSources(
            this.searchParameters, 
            this.onSourcesChange.bind(this));
        Loading('sourcesFilter');
    };

    onSourcesChange(sources) {
        this.searchParameters.sources = sources;
        this.sourcesFilter.draw(sources);
    }
}