import { LitElement } from "lit";
import env from '../../.env.json' assert {type: 'json'};

export class ApiData extends LitElement {
    static get properties() {
        return {
            type: { type: String },
            page: { type: Number },
            limit: { type: Number },
            id: { type: Number }
        }
    }

    constructor() {
        super();
    }
    
    firstUpdated() {
        this.requestAllPlayers();        
    }

    _requestEventHandler(data) {
        this.dispatchEvent(new CustomEvent('futResponse', {
            detail: { data }, bubbles: true, composed: true
        }));
    }

    async requestAllPlayers() {
        try {
            let url = this.id ? `${env.url}/${this.type}/${this.id}` : `${env.url}/${this.type}`;            
            const response = await fetch(url, {
                headers: {
                    'X-AUTH-TOKEN': env.apiKey                    
                }
            });
            const json = await response.json();
            this._requestEventHandler(json);
        } catch (error) {
            console.error(error)
        }
    }
}

customElements.define('api-data', ApiData);