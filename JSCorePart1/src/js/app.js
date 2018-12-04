import NewsFeed from './NewsFeed.js';
//import '../css/site.css';

window.onload = () => {
    new NewsFeed().draw();
};

window.onerror = (msg, url, lineNo, columnNo, error) => {
    import('./ErrorHandler.js')
        .then(module => {
            let handler = new module.default();
            handler.Handle(msg, url, lineNo, columnNo, error);
        });
    
}