import SearchWidget from './SearchWidget.js';

export default class NewsFeed {
    constructor () {
        this.searchWidget = new SearchWidget(this.renderNews.bind(this));
    };

    draw(news) {
        this.searchWidget.draw();
    };

    renderNews(news) {
        const html = news.map(n => `
        <article class="row">
            <div class="col s3">
                <img width="100%" src="${n.urlToImage}" />
            </div>
            <div class="col s9">
                <h5>
                    <a href="${n.url}">${n.title}</a>
                    </h3>
                <h6>${n.title}</h4>
                <p>${n.content}</p>
                <i>${n.author}</i>
            </div>
        </article>`).join('');

        document.getElementById("feed").innerHTML = html;
    };
}