import { GetRequest, PostRequest } from "./Requests.js";
import RequestProxy from "./RequestProxy.js";

export default class RequestFactory {
    create(url, method, headers, body) {
        if (method === 'GET') {
            let request = new GetRequest(url, headers);
            return new RequestProxy(request);
        }
            
        if (method === 'POST') {
            request = new PostRequest(url, headers, body);
            return new RequestProxy(request);
        }

        throw new TypeError("Only GET and POST methods are supported.");
    };
}