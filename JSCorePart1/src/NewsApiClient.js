const apiKey = "42550f2e240d4605a04069e84d56aaa2";
const baseUrl = "https://newsapi.org/";

export default class NewsApiClient {
    getSources ({countries, language, categories}, callback) {
        const url = `${baseUrl}v2/sources?country=${countries.join(',')}&language=${language}&category=${categories.join(',')}`;
        this.performGetRequest(url, json => callback(json.sources));
    }

    getNews()

    performGetRequest(url, callback) {
        let myHeaders = new Headers();
        myHeaders.append("X-Api-Key", apiKey);

        let options = { 
            method: 'GET',
            headers: myHeaders,
            cache: 'no-cache' };

        fetch(url, options)
            .then(response => response.json())
            .then(callback);
    }
};