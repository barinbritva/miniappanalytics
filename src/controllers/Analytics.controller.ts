import { App } from '../app'
import {TonConnectObserver} from "../observers/TonConnect.observer";
import {DocumentObserver} from "../observers/Document.observer";

export class AnalyticsController {
    constructor(app: App) {
        this.appModule = app;

        this.documentObserver = new DocumentObserver(this);
        this.tonConnectObserver = new TonConnectObserver(this);
    }

    public init() {
        this.documentObserver.init();
        this.tonConnectObserver.init();
    }

    public recordEvent(event_name: string, data?: any) {
        this.appModule.recordEvent(event_name, data).catch(e => console.error(e));
    }

    private appModule: App;
    private tonConnectObserver: TonConnectObserver;
    private documentObserver: DocumentObserver;
}
