import BaseRequest from './BaseRequest.js';

export class GetRequest extends BaseRequest {
    constructor(url, headers) {
        super(url, headers, 'GET');
    }
}

export class PostRequest extends BaseRequest {
    constructor(url, headers, body) {
        super(url, headers, 'POST');
        this.options.body = body;
    }
}