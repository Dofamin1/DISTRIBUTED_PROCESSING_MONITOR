export default class SocketClient {
    constructor() {
        this.ws = new WebSocket( 'ws://localhost:8088');
        this.eventsMap = new Map();
    }

    onEvent(eventName, callback) {
        this.eventsMap.set(eventName, callback);
        this.ws.onmessage = body => {
            const {event, data} = JSON.parse(body.data);
            let handler = this.eventsMap.get(event);
            if (handler) {
                handler(data)
            }
        };
    }
}
