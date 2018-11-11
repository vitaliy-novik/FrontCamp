const apiKey = "42550f2e240d4605a04069e84d56aaa2";
const baseUrl = "https://newsapi.org/";

export default class NewsApiClient {
    getSources ({country, language, category}, callback) {
        const url = `${baseUrl}v2/sources?country=${country}&language=${language}&category=${category}`;
        this.performGetRequest(url, callback);
    }

    performGetRequest(url, callback) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-Api-Key", apiKey);

        let options = { 
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default' };

        fetch(url, options).then();
    }
};