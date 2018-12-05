const apiKey = "42550f2e240d4605a04069e84d56aaa2";
const baseUrl = "https://newsapi.org/";

import RequestFactory from './http/RequestFactory.js';

export default class NewsApiClient {
    constructor() {
        this.headers = new Headers();
        this.headers.append("X-Api-Key", apiKey);
        this.requestFactory = new RequestFactory();
    }

    getSources ({countries, language, categories}, callback) {
        const url = `${baseUrl}v2/sources?country=${countries.join(',')}&language=${language}&category=${categories.join(',')}`;
        this.performGetRequest(url, json => callback(json.sources));
    };

    getHeadlines({sources, query}, callback) {
        let sourcesParam = sources.map(s => s.id).join(',');
        const url = `${baseUrl}v2/top-headlines?q=${query}&sources=${sourcesParam}`;
        this.performGetRequest(url, json => callback(json.articles));
    };

    performGetRequest(url, callback) {
        let request = this.requestFactory.create(url, 'GET', this.headers);
        request.execute()
            .then(response => response.json())
            .then(json => callback(json));
    };
};