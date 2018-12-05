export default class BaseRequest {
    constructor(url, headers, method) {
        if (new.target === BaseRequest) {
            throw new TypeError("Cannot construct BaseRequest instances directly");
        }

        this.url = url;
        this.options = {
            method: method,
            headers: headers
        };
    };

    execute() { 
        return fetch(this.url, this.options);
    };
}