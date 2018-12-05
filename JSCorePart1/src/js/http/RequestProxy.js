export default class RequestProxy {
    constructor(request) {
        this.request = request;
    };

    execute() {
        console.log(this.request);
        return this.request.execute();
    };
}