export default class SocketClient {
    constructor() {
        this.PORT = 8088;
        this.HOST = "localhost"
        this.PROTOCOL = "ws"
        this.ws = new WebSocket(this.PROTOCOL + '://'+ this.HOST + ':' + this.PORT);
    }

    onEvent(eventName, callback) {
        const wrapedCallback = body => {
            const { event, data } = JSON.parse(body);
            if(event == eventName) {
                callback(data)
            }
        }
        this.ws.onmessage = wrapedCallback
    }
}
