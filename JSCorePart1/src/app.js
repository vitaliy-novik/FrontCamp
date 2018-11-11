import NewsFeed from './NewsFeed.js';

export default class App {
    start() {
        let newsFeed = new NewsFeed();
    }
};

window.onload = () => {
    new App().start();
};