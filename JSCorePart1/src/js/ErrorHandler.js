export default class ErrorHandler {
    constructor() {
        if (typeof ErrorHandler.instance === 'object') {
            return ErrorHandler.instance;
        }
        
        ErrorHandler.instance = this;
        return this;
    };

    Handle(msg, url, lineNo, columnNo, error) {
        alert(msg);
    };
}