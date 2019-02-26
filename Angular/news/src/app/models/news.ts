import Article from './article';

export default interface News {
    status: string;
    totalResults: number;
    articles: Article[];
}