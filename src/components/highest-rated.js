import { LitElement, html, css } from "lit";
import '../controller/api-data';
import '../controller/api-image';
import './player-card';

export class HighestRated extends LitElement {
    constructor() {
        super();
        this.addEventListener('futResponse', (e) => console.log(e.detail.data));
    }

    render() {
        return html`
            <api-data type="players"></api-data>
            <api-image type="players" id="18317"></api-image>
        `;
    }
}

customElements.define('highest-rated', HighestRated)