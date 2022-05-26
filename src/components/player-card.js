import { LitElement, html, css } from "lit";
import '../controller/api-data';
import '../controller/api-image';

export class PlayerCard extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {
            name: { type: String },            
            position: { type: String },
            club: { type: Number },
            nation: { type: Number },
            rarity: { type: Number },
            rating: { type: Number },
            pace: { type: Number },
            shooting: { type: Number },
            passing: { type: Number },
            dribbling: { type: Number },
            defending: { type: Number },
            physicality: { type: Number },
        }
    }

    static styles = css``;

    render() {
        return html`
            <div class="card">
                
            </div>
        `;
    }
}

customElements.define('player-card', PlayerCard);