import SearchWidget from './SearchWidget.js';

export default class NewsFeed {
    constructor () {
        this.searchWidget = new SearchWidget();
    };

    draw() {
        this.searchWidget.draw();
    };
}