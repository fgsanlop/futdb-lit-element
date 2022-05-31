import { LitElement, html, css } from "lit";
import env from '../../.env.json' assert {type: 'json'};

export class ApiImage extends LitElement {
    static get properties() {
        return {
            type: { type: String },
            id: { type: Number, attribute: 'item-id' },
            url: { attribute: false }
        }
    }
    
    static styles = css`
        img {
            width: 100%;
        }
    `;

    constructor() {
        super();
    }
    
    async firstUpdated() {
        this.url = await this.requestImage();
    }

    async requestImage() {
        try {
            let url = `${env.url}/${this.type}/${this.id}/image`;            
            const response = await fetch(url, {
                headers: {
                    'X-AUTH-TOKEN': env.apiKey                    
                }
            });
            const blobImg = await response.blob();
            const imgObjURL = URL.createObjectURL(blobImg);            
            return imgObjURL;
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return html`
            <img src="${this.url}" />
        `;
    }
}

customElements.define('api-image', ApiImage);